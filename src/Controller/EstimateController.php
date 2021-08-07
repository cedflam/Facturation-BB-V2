<?php

namespace App\Controller;

use App\Entity\Estimate;
use App\Entity\Invoice;
use App\Repository\EstimateRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class EstimateController extends AbstractController
{
    // Propriétés
    private EstimateRepository $estimateRepository;

    /**
     * EstimateController constructor.
     * @param EstimateRepository $estimateRepository
     */
    public function __construct(EstimateRepository $estimateRepository)
    {
        $this->estimateRepository = $estimateRepository;
    }

    /**
     * Permet de retourner le nombre total   de devis actifs
     * @Route("/api/estimates/findNbEstimates", name="find_nbEstimates")
     */
    public function findNbEstimates(): Response
    {
        $estimates = $this->estimateRepository->findBy(['state' => true, 'archive' => false]);
        $total = 0;
        foreach ($estimates as $estimate){
            if ($estimate->getInvoice()->getTypeInvoice() === Invoice::FACTURE_ACOMPTE ||
                !$estimate->getInvoice()->getMeansPayment() && $estimate->getInvoice()->getTypeInvoice() === Invoice::FACTURE_FINALE
            ){
                $total += 1;
            }
        }
        $response = new Response($total, Response::HTTP_OK);
        $response->setMaxAge(3600);
        return $response;
    }
}
