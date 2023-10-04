using System;
using System.Collections.Generic;

class Program
{
    static void Main(string[] args)
    {
        // Блок для оголошення класу пасажира
        {
            class Passenger
            {
                public string Name { get; set; }
                public int Age { get; set; }
                public string PassportNumber { get; set; }

                public Passenger(string name, int age, string passportNumber)
                {
                    Name = name;
                    Age = age;
                    PassportNumber = passportNumber;
                }
            }

            // Блок для оголошення класу рейсу
            {
                class Flight
                {
                    public string FlightNumber { get; set; }
                    public string Destination { get; set; }
                    public DateTime DepartureTime { get; set; }
                    public string AircraftModel { get; set; }
                    public int Capacity { get; set; }
                    private List<Passenger> passengers = new List<Passenger>();

                    public Flight(string flightNumber, string destination, DateTime departureTime, string aircraftModel, int capacity)
                    {
                        FlightNumber = flightNumber;
                        Destination = destination;
                        DepartureTime = departureTime;
                        AircraftModel = aircraftModel;
                        Capacity = capacity;
                    }

                    // Метод для додавання пасажира до рейсу
                    public void AddPassenger(Passenger passenger)
                    {
                        if (passengers.Count < Capacity)
                        {
                            passengers.Add(passenger);
                            Console.WriteLine($"Passenger {passenger.Name} was added to the flight {FlightNumber}");
                        }
                        else
                        {
                            Console.WriteLine($"Flight {FlightNumber} already filled It is not possible to add a passenger.");
                        }
                    }

                    // Метод для виведення списку пасажирів на рейсі
                    public void PrintPassengerList()
                    {
                        Console.WriteLine($"List of passengers on the flight {FlightNumber}:");
                        foreach (var passenger in passengers)
                        {
                            Console.WriteLine($"Name: {passenger.Name}, Age: {passenger.Age}, Passport: {passenger.PassportNumber}");
                        }
                    }
                }

                // Блок для основної логіки програми
                {
                    // Створення об'єктів рейсів
                    Flight flight1 = new Flight("AA123", "New York", DateTime.Now.AddHours(2), "Boeing 737", 150);
                    Flight flight2 = new Flight("UA456", "Los Angeles", DateTime.Now.AddHours(3), "Airbus A320", 180);

                    // Додавання пасажирів на рейс
                    Passenger passenger1 = new Passenger("John Doe", 30, "AB123456");
                    Passenger passenger2 = new Passenger("Jane Smith", 25, "CD789012");

                    flight1.AddPassenger(passenger1);
                    flight1.AddPassenger(passenger2);

                    // Виведення списку рейсів
                    Console.WriteLine("Список рейсів:");
                    Console.WriteLine($"Рейс {flight1.FlightNumber}, Призначення: {flight1.Destination}, Відправлення: {flight1.DepartureTime}, Літак: {flight1.AircraftModel}");

                    // Виведення списку пасажирів на рейсі
                    flight1.PrintPassengerList();
                }
            }
        }
    }
}
