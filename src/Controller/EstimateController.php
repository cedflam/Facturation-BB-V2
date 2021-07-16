<?php

namespace App\Controller;

use App\Entity\Estimate;
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
     * @Route("/estimates/findNbEstimates", name="find_nbEstimates")
     */
    public function findNbEstimates(): Response
    {
        $nbEstimates = count($this->estimateRepository->findBy(['state' => true]));
        $response = new Response($nbEstimates, Response::HTTP_OK);
        $response->setMaxAge(3600);
        return $response;
    }
}
