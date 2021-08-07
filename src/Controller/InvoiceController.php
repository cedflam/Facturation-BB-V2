<?php

namespace App\Controller;

use App\Entity\Invoice;
use App\Repository\InvoiceRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class InvoiceController extends AbstractController
{
    //Propriétés
    private InvoiceRepository $invoiceRepository;

    /**
     * InvoiceController constructor.
     * @param InvoiceRepository $invoiceRepository
     */
    public function __construct(InvoiceRepository $invoiceRepository)
    {
        $this->invoiceRepository = $invoiceRepository;
    }

    /**
     * Permet de récupérer le nombre de factures en cours
     * @Route("/api/invoices/nbTotalInvoices", name="find_nbTotalInvoices")
     * @return Response
     */
    public function findNbInvoices(): Response
    {
        $invoices = $this->invoiceRepository->findBy(['meansPayment' => null]);
        $total = 0;
        foreach($invoices as $invoice){
            if ($invoice->getEstimate()->getState() && !$invoice->getEstimate()->getArchive()){
                $total += 1;
            }
        }
        $response = new Response($total, Response::HTTP_OK);
        $response->setMaxAge(3600);
        return $response;
    }

    /**
     * Permet de calculer le total des factures finales en cours non réglées
     * @Route("/api/invoices/findTotalAmountFinalInvoices", name="find_totalAmount_finalInvoices")
     */
    public function findTotalAmountFinalInvoices(): Response
    {
        $invoices = $this->invoiceRepository->findBy(['state' => true, 'meansPayment' => null]);
        $total = 0;
        foreach($invoices as $invoice){
            $total += $invoice->getRemainingCapital();
        }
        $total = number_format($total, 2, ',', ' ');
        $response = new Response($total, Response::HTTP_OK);
        $response->setMaxAge(3600);
        return $response;
    }

    /**
     * Permet de récupérer tous les acomptes versés sur les factures de l'année en cours
     * pour les factures qui sont en status 'acompte'
     * @Route("/api/invoices/findTotalAdvances", name="find_totalAdvances")
     * @return Response
     */
    public function findTotalAdvances(): Response
    {
        $invoices = $this->invoiceRepository->findBy(['state' => false, 'typeInvoice' => Invoice::FACTURE_ACOMPTE]);
        $total = 0;
        foreach($invoices as $invoice){
            $total += $invoice->getTotalAdvance();
        }
        $total = number_format($total, 2, ',', ' ');
        $response = new Response($total, Response::HTTP_OK);
        $response->setMaxAge(3600);
        return $response;
    }

    /**
     * Permet de récupérer le total des factures finalisées de l'année en cours
     * @Route("/api/invoices/findTotalInvoicesFinalized", name="find_totalInvoicesFinalized")
     * @return Response
     */
    public function findTotalInvoicesFinalized(): Response
    {
        $invoices = $this->invoiceRepository->findBy(['state' => true, 'typeInvoice' => Invoice::FACTURE_FINALE]);
        $now = new \DateTime('now');
        $now = date_format($now, 'Y');
        $total = 0;
        foreach ($invoices as $invoice){
            $invoiceDate = date_format($invoice->getCreatedAt(), 'Y');
            if($invoice->getMeansPayment() && $invoiceDate >= $now ){
                $total += $invoice->getTotalTtc();
            }
        }
        $total = number_format($total, 2, ',', ' ');
        $response = new Response($total, Response::HTTP_OK);
        $response->setMaxAge(3600);
        return $response;
    }

}
