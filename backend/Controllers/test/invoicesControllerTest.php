<?php

namespace App\Controllers\Tests;

use App\Controllers\InvoicesController;
use App\Models\Invoices;
use App\Repositories\InvoicesRepository;
use App\Services\InvoicesService;
use PHPUnit\Framework\TestCase;

class InvoicesControllerTest extends TestCase
{
    public function testCreateInvoices()
    {

        require_once(__DIR__ . '/../InvoicesController.php');
        require_once(__DIR__ . '/../../Repositories/InvoicesRepository.php');
        require_once(__DIR__ . '/../../Core/Database.php');
        require_once(__DIR__ . '/../../Models/Invoices.php');
        require_once(__DIR__ . '/../../Services/InvoicesService.php');
        require_once(__DIR__ . '/../../vendor/autoload.php');


        $invoicesController = new InvoicesController();

        $_POST['company_id'] = 1;

        $invoicesController->createInvoice();

        // Check that the invoice has been created by checking the JSON response
        $this->expectOutputString('Invoice successfully created!');
    }

    public function testUpdateInvoices()
    {

        require_once(__DIR__ . '/../InvoicesController.php');
        require_once(__DIR__ . '/../../Repositories/InvoicesRepository.php');
        require_once(__DIR__ . '/../../Core/Database.php');
        require_once(__DIR__ . '/../../Models/Invoices.php');
        require_once(__DIR__ . '/../../Services/InvoicesService.php');
        require_once(__DIR__ . '/../../vendor/autoload.php');

        $invoicesController = new InvoicesController();

        $_POST['id'] = 1;
        $_POST['company_id'] = 1;

        $invoicesController->updateInvoice();

        // Check that the invoice has been created by checking the JSON response
        $this->expectOutputString('Invoice successfully updated!');
    }

   public function testDeleteInvoice()
   {
         require_once(__DIR__ . '/../InvoicesController.php');
         require_once(__DIR__ . '/../../Repositories/InvoicesRepository.php');
         require_once(__DIR__ . '/../../Core/Database.php');
         require_once(__DIR__ . '/../../Models/Invoices.php');
         require_once(__DIR__ . '/../../Services/InvoicesService.php');
         require_once(__DIR__ . '/../../vendor/autoload.php');

         $invoicesController = new InvoicesController();

         $_POST['id'] = 1;

         $invoicesController->deleteInvoice();

<<<<<<< HEAD
        // Vérifiez que la facture a été créée en vérifiant la réponse JSON
        $this->expectOutputString('Invoice successfully created!');

        // Récupérez l'ID de la facture créée
        $response = json_decode($this->getActualOutput());
        var_dump($response); // Ajoutez cette ligne pour vérifier la valeur de $response
        if ($response === null) {
            var_dump($this->getActualOutput());
            die('Failed to create invoice!');
        }

        $invoiceId = $response->id;

        // Supprimez la facture de la base de données en utilisant l'ID
        $_POST['id'] = $invoiceId;

        $invoicesController->deleteInvoice();

        // Vérifiez que la facture a été supprimée en vérifiant la réponse JSON
        $this->expectOutputString('Invoice successfully deleted!');
    }
=======
         // Check that the invoice has been created by checking the JSON response
         $this->expectOutputString('Invoice successfully deleted!');
   }


>>>>>>> a66f33179d72c5c35072de9cf163c4d34a4e8360
}