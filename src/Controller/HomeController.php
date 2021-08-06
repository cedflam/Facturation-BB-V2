<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController
{
    /**
     * @Route("/{root}", name="app", defaults={"root": null})
     */
    public function index($root): Response
    {
        return $this->render('home/home.html.twig', []);
    }
}
