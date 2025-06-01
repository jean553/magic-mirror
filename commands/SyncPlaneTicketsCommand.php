<?php

namespace App\Command;

use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use GuzzleHttp\Client as GuzzleClient;
use GuzzleHttp\RequestOptions;

#[AsCommand(name: 'app:sync-plane-tickets')]
class SyncPlaneTicketsCommand extends Command
{
    private GuzzleClient $httpClient;

    public function __construct(
    ) {
        parent::__construct();
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {

        $this->extractData('barcelona');
        $this->extractData('bangkok');
        $this->extractData('tokyo');
        $this->extractData('hongkong');
        $this->extractData('shanghai');
        $this->extractData('seoul');
        $this->extractData('newyork');
        $this->extractData('sanfrancisco');

        return Command::SUCCESS;
    }

    private function extractData(string $destinationName) {

        // scrapped raw content is loaded from here
        $fullBody = file_get_contents('/vagrant/extract_' . $destinationName);

        $sub = array();
        $subsub = array();
        preg_match('/matrixEntries(.*?)returnLabels/', $fullBody, $sub);
        preg_match('/(.*?)departLabels/', $sub[1], $subsub);

        $extracted = $subsub[1];
        $extracted = substr($extracted, 2);
        $extracted = substr($extracted, 0, -2);

        $obj = json_decode($extracted);
        $results = (array) $obj;

        if (JSON_ERROR_NONE !== json_last_error()) {
            dump(json_last_error());
        }

        $flights = array();
        foreach ($results as $oneResult) {

            if ($oneResult->allFlights->price == null) {
                continue;
            }

            $flights[] = [
                "goTravelDate" => \DateTime::createFromFormat('Ymd', $oneResult->departFilterValue)->format('M d'),
                "backTravelDate" => \DateTime::createFromFormat('Ymd', $oneResult->returnFilterValue)->format('M d'),
                "price" => $oneResult->allFlights->price
            ];
        }


        usort($flights, function($a, $b) {
            return $a["price"] <=> $b["price"];
        });

		if (\count($flights) === 0) {
        _put_contents('/vagrant/MMM-Plane-Tickets.js', preg_replace('/' . $destinationName . 'FirstDates.innerHTML="(.*)";/', '' . $destinationName . 'FirstDates.innerHTML="No direct flight at the moment";', file_get_contents('/vagrant/MMM-Plane-Tickets.js')));
        _put_contents('/vagrant/MMM-Plane-Tickets.js', preg_replace('/' . $destinationName . 'FirstPrice.innerHTML="(.*)";/', '' . $destinationName . 'FirstPrice.innerHTML="";', file_get_contents('/vagrant/MMM-Plane-Tickets.js')));

        _put_contents('/vagrant/MMM-Plane-Tickets.js', preg_replace('/' . $destinationName . 'SecondDates.innerHTML="(.*)";/', '' . $destinationName . 'SecondDates.innerHTML="";', file_get_contents('/vagrant/MMM-Plane-Tickets.js')));
        _put_contents('/vagrant/MMM-Plane-Tickets.js', preg_replace('/' . $destinationName . 'SecondPrice.innerHTML="(.*)";/', '' . $destinationName . 'SecondPrice.innerHTML="";', file_get_contents('/vagrant/MMM-Plane-Tickets.js')));

        _put_contents('/vagrant/MMM-Plane-Tickets.js', preg_replace('/' . $destinationName . 'ThirdDates.innerHTML="(.*)";/', '' . $destinationName . 'ThirdDates.innerHTML="";', file_get_contents('/vagrant/MMM-Plane-Tickets.js')));
        _put_contents('/vagrant/MMM-Plane-Tickets.js', preg_replace('/' . $destinationName . 'ThirdPrice.innerHTML="(.*)";/', '' . $destinationName . 'ThirdPrice.innerHTML="";', file_get_contents('/vagrant/MMM-Plane-Tickets.js')));

				return;
		}

        $dates = $flights[0]['goTravelDate'] . ' - ' . $flights[0]['backTravelDate'];
        file_put_contents('/vagrant/MMM-Plane-Tickets.js', preg_replace('/' . $destinationName . 'FirstDates.innerHTML="(.*)";/', '' . $destinationName . 'FirstDates.innerHTML="' . $dates . '";', file_get_contents('/vagrant/MMM-Plane-Tickets.js')));
        file_put_contents('/vagrant/MMM-Plane-Tickets.js', preg_replace('/' . $destinationName . 'FirstPrice.innerHTML="(.*)";/', '' . $destinationName . 'FirstPrice.innerHTML="' . $flights[0]['price'] . ' €";', file_get_contents('/vagrant/MMM-Plane-Tickets.js')));

        $dates = $flights[1]['goTravelDate'] . ' - ' . $flights[1]['backTravelDate'];
        file_put_contents('/vagrant/MMM-Plane-Tickets.js', preg_replace('/' . $destinationName . 'SecondDates.innerHTML="(.*)";/', '' . $destinationName . 'SecondDates.innerHTML="' . $dates . '";', file_get_contents('/vagrant/MMM-Plane-Tickets.js')));
        file_put_contents('/vagrant/MMM-Plane-Tickets.js', preg_replace('/' . $destinationName . 'SecondPrice.innerHTML="(.*)";/', '' . $destinationName . 'SecondPrice.innerHTML="' . $flights[1]['price'] . ' €";', file_get_contents('/vagrant/MMM-Plane-Tickets.js')));

        $dates = $flights[2]['goTravelDate'] . ' - ' . $flights[2]['backTravelDate'];
        file_put_contents('/vagrant/MMM-Plane-Tickets.js', preg_replace('/' . $destinationName . 'ThirdDates.innerHTML="(.*)";/', '' . $destinationName . 'ThirdDates.innerHTML="' . $dates . '";', file_get_contents('/vagrant/MMM-Plane-Tickets.js')));
        file_put_contents('/vagrant/MMM-Plane-Tickets.js', preg_replace('/' . $destinationName . 'ThirdPrice.innerHTML="(.*)";/', '' . $destinationName . 'ThirdPrice.innerHTML="' . $flights[2]['price'] . ' €";', file_get_contents('/vagrant/MMM-Plane-Tickets.js')));

    }
}
