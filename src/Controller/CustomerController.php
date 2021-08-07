<?php

namespace App\Controller;

use App\Repository\CustomerRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;

class CustomerController extends AbstractController
{
    // Propriétés
    private CustomerRepository $customerRepository;
    private SerializerInterface $serializer;

    /**
     * CustomerController constructor.
     * @param CustomerRepository $customerRepository
     * @param SerializerInterface $serializer
     */
    public function __construct(CustomerRepository $customerRepository, SerializerInterface $serializer)
    {
        $this->customerRepository = $customerRepository;
        $this->serializer = $serializer;
    }

    /**
     * Permet de retourner le nombre total de customers
     * @Route("/api/customers/findNbCustomers", name="find_nbCustomers")
     * @return Response
     */
    public function findNbCustomers(): Response
    {
        $nbCustomers = count($this->customerRepository->findAll());
        $response = new Response($nbCustomers, Response::HTTP_OK);
        $response->setMaxAge(3600);
        return $response;
    }
}
