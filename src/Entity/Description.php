<?php

namespace App\Entity;

use App\Repository\DescriptionRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass=DescriptionRepository::class)
 * @ORM\HasLifecycleCallbacks
 */
class Description
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups({"customers_read"})
     */
    private $id;

    /**
     * @return mixed
     */
    public function getId()
    {
        return $this->id;
    }
    /**
     * @ORM\Column(type="string", length=2000)
     * @Groups({"customers_read"})
     */
    private $prestation;

    /**
     * @ORM\Column(type="datetime")
     * @Groups({"customers_read"})
     */
    private $createdAt;

    /**
     * @ORM\Column(type="float")
     * @Groups({"customers_read"})
     */
    private $unitPrice;

    /**
     * @ORM\Column(type="float")
     * @Groups({"customers_read"})
     */
    private $quantity;

    /**
     * @ORM\Column(type="float")
     * @Groups({"customers_read"})
     */
    private $tva;

    /**
     * @ORM\Column(type="float")
     * @Groups({"customers_read"})
     */
    private $totalHt;

    /**
     * @ORM\Column(type="float")
     * @Groups({"customers_read"})
     */
    private $totalTtc;

    /**
     * @ORM\ManyToOne(targetEntity=Estimate::class, inversedBy="descriptions")
     *
     */
    private $estimate;

    /**
     * @ORM\ManyToOne(targetEntity=Invoice::class, inversedBy="descriptions", cascade={"remove"})
     */
    private $invoice;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $position;

    public function getPrestation(): ?string
    {
        return $this->prestation;
    }

    public function setPrestation(string $prestation): self
    {
        $this->prestation = $prestation;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->createdAt;
    }

    /**
     * @return $this
     * @ORM\PrePersist()
     */
    public function setCreatedAt(): Description
    {
        $this->createdAt = new \DateTime();

        return $this;
    }

    public function getUnitPrice(): ?float
    {
        return $this->unitPrice;
    }

    public function setUnitPrice(float $unitPrice): self
    {
        $this->unitPrice = $unitPrice;

        return $this;
    }

    public function getQuantity(): ?float
    {
        return $this->quantity;
    }

    public function setQuantity(float $quantity): self
    {
        $this->quantity = $quantity;

        return $this;
    }

    public function getTva(): ?float
    {
        return $this->tva;
    }

    public function setTva(float $tva): self
    {
        $this->tva = $tva;

        return $this;
    }

    public function getTotalHt(): ?float
    {
        return $this->totalHt;
    }

    public function setTotalHt(float $totalHt): self
    {
        $this->totalHt = $totalHt;

        return $this;
    }

    public function getTotalTtc(): ?float
    {
        return $this->totalTtc;
    }

    public function setTotalTtc(float $totalTtc): self
    {
        $this->totalTtc = $totalTtc;

        return $this;
    }

    public function getEstimate(): ?Estimate
    {
        return $this->estimate;
    }

    public function setEstimate(?Estimate $estimate): self
    {
        $this->estimate = $estimate;

        return $this;
    }

    public function getInvoice(): ?Invoice
    {
        return $this->invoice;
    }

    public function setInvoice(?Invoice $invoice): self
    {
        $this->invoice = $invoice;

        return $this;
    }

    public function getPosition(): ?int
    {
        return $this->position;
    }

    public function setPosition(?int $position): self
    {
        $this->position = $position;

        return $this;
    }
}