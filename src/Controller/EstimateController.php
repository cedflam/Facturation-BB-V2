<?php

namespace App\Controller;

use App\Entity\Estimate;
use App\Entity\Invoice;
use App\Repository\EstimateRepository;
use phpDocumentor\Reflection\DocBlock\Serializer;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;

class EstimateController extends AbstractController
{
    // Propriétés
    private EstimateRepository $estimateRepository;
    private SerializerInterface $serializer;

    /**
     * EstimateController constructor.
     * @param EstimateRepository $estimateRepository
     * @param \Symfony\Component\Serializer\SerializerInterface $serializer
     */
    public function __construct(EstimateRepository $estimateRepository, SerializerInterface $serializer)
    {
        $this->estimateRepository = $estimateRepository;
        $this->serializer = $serializer;
    }

    /**
     * Permet de retourner le nombre total   de devis actifs
     * @Route("/api/estimates/actives", name="find_all_actives_estimates", methods={"GET"})
     */
    public function finsAllActivesEstimates(): Response
    {
        $estimates = $this->estimateRepository->findBy(['state' => true, 'archive' => false]);
        $datas = $this->serializer->normalize($estimates, 'json', [
            'groups' => 'estimates_read'
        ]);
        $response = new JsonResponse($datas, Response::HTTP_OK);
        $response->setMaxAge(3600);
        return $response;
    }
}
