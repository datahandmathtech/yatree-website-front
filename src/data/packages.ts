export interface VehicleRate {
  vehicle: string;
  rate: number;
}

export interface TaxiPackage {
  id: string;
  title: string;
  stay: string;
  route: string;
  includedKm: number;
  rates: VehicleRate[];
}

export const packagesData: TaxiPackage[] = [
  {
    id: "pkg-1",
    title: "1 NIGHT / 2 DAYS - UDAIPUR",
    stay: "1 Night Udaipur",
    route: "Udaipur Sightseeing",
    includedKm: 250,
    rates: [
      { vehicle: "Sedan", rate: 6000 },
      { vehicle: "Premium Sedan", rate: 7000 },
      { vehicle: "Innova Crysta", rate: 8000 },
      { vehicle: "Tempo Traveller - 12 Seater", rate: 11000 }
    ]
  },
  {
    id: "pkg-2",
    title: "2 NIGHTS / 3 DAYS - UDAIPUR + EXCURSION",
    stay: "2 Nights Udaipur",
    route: "Nathdwara / Chittorgarh / Kumbhalgarh (one selected destination)",
    includedKm: 750,
    rates: [
      { vehicle: "Sedan", rate: 9000 },
      { vehicle: "Premium Sedan", rate: 11000 },
      { vehicle: "Innova Crysta", rate: 15000 },
      { vehicle: "Tempo Traveller - 12 Seater", rate: 21000 }
    ]
  },
  {
    id: "pkg-3",
    title: "3 NIGHTS / 4 DAYS - UDAIPUR + MOUNT ABU",
    stay: "2 Nights Udaipur + 1 Night Mount Abu",
    route: "Pickup: Udaipur | Drop: Mount Abu / Udaipur",
    includedKm: 1000,
    rates: [
      { vehicle: "Sedan", rate: 12000 },
      { vehicle: "Premium Sedan", rate: 14000 },
      { vehicle: "Innova Crysta", rate: 20000 },
      { vehicle: "Tempo Traveller - 12 Seater", rate: 28000 }
    ]
  },
  {
    id: "pkg-4",
    title: "4 NIGHTS / 5 DAYS - UDAIPUR + MOUNT ABU + JODHPUR",
    stay: "2 Nights Udaipur + 1 Night Mount Abu + 1 Night Jodhpur",
    route: "Pickup: Udaipur | Drop: Jodhpur",
    includedKm: 1250,
    rates: [
      { vehicle: "Sedan", rate: 15000 },
      { vehicle: "Premium Sedan", rate: 17500 },
      { vehicle: "Innova Crysta", rate: 25000 },
      { vehicle: "Tempo Traveller - 12 Seater", rate: 35000 }
    ]
  },
  {
    id: "pkg-5",
    title: "5 NIGHTS / 6 DAYS - UDAIPUR + JODHPUR + JAISALMER",
    stay: "2 Nights Udaipur + 1 Night Jodhpur + 2 Nights Jaisalmer",
    route: "Pickup: Udaipur | Drop: Jaisalmer",
    includedKm: 1500,
    rates: [
      { vehicle: "Sedan", rate: 18000 },
      { vehicle: "Premium Sedan", rate: 21000 },
      { vehicle: "Innova Crysta", rate: 30000 },
      { vehicle: "Tempo Traveller - 12 Seater", rate: 42000 }
    ]
  },
  {
    id: "pkg-6",
    title: "6 NIGHTS / 7 DAYS - GRAND RAJASTHAN JOURNEY",
    stay: "2 Nights Udaipur + 1 Night Jodhpur + 1 Night Jaisalmer + 2 Nights Jaipur",
    route: "Pickup: Udaipur | Drop: Jaipur",
    includedKm: 2100,
    rates: [
      { vehicle: "Sedan", rate: 25000 },
      { vehicle: "Premium Sedan", rate: 29500 },
      { vehicle: "Innova Crysta", rate: 42000 },
      { vehicle: "Tempo Traveller - 12 Seater", rate: 59000 }
    ]
  }
];
