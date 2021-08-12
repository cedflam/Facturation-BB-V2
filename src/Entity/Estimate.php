<?php

namespace App\Entity;

use App\Repository\EstimateRepository;
use DateTimeInterface;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Doctrine\ORM\Mapping\OrderBy;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass=EstimateRepository::class)
 *
 */
class Estimate
{
    const DEVIS_EN_COURS = false;
    const DEVIS_ACCEPTE = true;

    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups({"customers_read", "estimates_read"})
     *
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
     * @ORM\Column(type="float")
     * @Groups({"customers_read", "estimates_read"})
     */
    private $totalHt;

    /**
     * @ORM\Column(type="float")
     * @Groups({"customers_read", "estimates_read"})
     */
    private $totalTtc;

    /**
     * @ORM\Column(type="float")
     * @Groups({"customers_read", "estimates_read"})
     */
    private $totalAdvance;

    /**
     * @ORM\Column(type="boolean")
     * @Groups({"customers_read", "estimates_read"})
     *
     */
    private $state;

    /**
     * @ORM\Column(type="datetime")
     * @Groups({"customers_read", "estimates_read"})
     */
    private $createdAt;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"customers_read", "estimates_read"})
     */
    private $reference;

    /**
     * @ORM\ManyToOne(targetEntity=Customer::class, inversedBy="estimates")
     *  @Groups({"estimates_read"})
     */
    private $customer;

    /**
     * @ORM\OneToOne(targetEntity=Invoice::class, mappedBy="estimate", cascade={"persist", "remove"})
     *
     */
    private $invoice;

    /**
     * @ORM\OneToMany(targetEntity=Description::class, mappedBy="estimate")
     * @Groups({"customers_read"})
     */
    private $descriptions;

    /**
     * @ORM\Column(type="boolean")
     * @Groups({"customers_read"})
     */
    private $archive;

    public function __construct()
    {
        $this->descriptions = new ArrayCollection();
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

    public function getTotalAdvance(): ?float
    {
        return $this->totalAdvance;
    }

    public function setTotalAdvance(float $totalAdvance): self
    {
        $this->totalAdvance = $totalAdvance;

        return $this;
    }

    public function getState(): ?bool
    {
        return $this->state;
    }

    public function setState(bool $state): self
    {
        $this->state = $state;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->createdAt;
    }


    public function setCreatedAt($createdAt): void
    {
        $this->createdAt = $createdAt;
    }



    public function getReference(): ?string
    {
        return $this->reference;
    }

    public function setReference(string $reference): self
    {
        $this->reference = $reference;

        return $this;
    }

    public function getCustomer(): ?Customer
    {
        return $this->customer;
    }

    public function setCustomer(?Customer $customer): self
    {
        $this->customer = $customer;

        return $this;
    }

    public function getInvoice(): ?Invoice
    {
        return $this->invoice;
    }

    public function setInvoice(Invoice $invoice): self
    {
        $this->invoice = $invoice;

        // set the owning side of the relation if necessary
        if ($invoice->getEstimate() !== $this) {
            $invoice->setEstimate($this);
        }

        return $this;
    }

    /**
     * @return Collection|Description[]
     */
    public function getDescriptions(): Collection
    {
        return $this->descriptions;
    }

    public function addDescription(Description $description): self
    {
        if (!$this->descriptions->contains($description)) {
            $this->descriptions[] = $description;
            $description->setEstimate($this);
        }

        return $this;
    }

    public function removeDescription(Description $description): self
    {
        if ($this->descriptions->removeElement($description)) {
            // set the owning side to null (unless already changed)
            if ($description->getEstimate() === $this) {
                $description->setEstimate(null);
            }
        }

        return $this;
    }

    public function getArchive(): ?bool
    {
        return $this->archive;
    }

    public function setArchive(bool $archive): self
    {
        $this->archive = $archive;

        return $this;
    }
}