type BookingMethod = "Appointment" | "GroupReservation" | "Rental";

interface BookingData {
  bookNowStatus: "Abort" | "Booked";
  bookingMethod?: BookingMethod;
  bookingId?: string;
  groupEventId?: number;
  merchantCurrency?: string;
  staffId?: number;
  staffFirstName?: string;
  staffLastName?: string;
  startsOn?: string;
  clientAvailability?: RequestedRange[];
  clientCount?: number;
  client?: Client;
  items?: Item[];
  payment?: Payment;
}

interface Client {
  firstName: string;
  lastName: string;
  email?: string;
  mobilePhoneNumber?: string;
  remindByEmail: boolean;
  remindBySMS: boolean;
  additionalRequest: string;
}

interface Item {
  serviceId: number;
  serviceName?: string;
  serviceCategoryName?: string;
  priceText?: string;
  productId?: string;
  reservedTimespan?: Timespan;
}

interface Timespan {
  duration: number;
}

interface Payment {
  onlinePaymentAmount?: string;
  onlinePaymentId?: string;
  total?: string;
}

interface RequestedRange {
  from: string;
  to: string;
}

// This object is defined to allow TypeScript to compile the code.
// BookNow is defined in the Booxi widget's script, which is included into the index.html file.
declare let BookNow: {
  open: (config: {

    // Required
    apiKey: string;

    // Apply this ID to Book Now's iframe to enable be referencing it in styles and scripts.
    iframeId?: string;

    // Override automatic language detection.
    language?: string;

    // In case we don't have translations for your language.
    fallbackLanguage?: string;

    // Can be merchant for the default flow or locations for multiple locations. Default: merchant.
    bookingFlow?: 'locations' | 'merchant';

    // Only show services matching the provided tag expression.
    serviceTags?: string;

    // Only show store locations matching the provided tag expression.
    locationTags?: string;

    // Only show appointment availability from time slots that matches all the tags. Maximum 10 tags and 100 characters.
    availabilityTags?: string;

    // Allow forced "Choose a category" option when booking with store locations. required to enable, default is default.
    locationCategory?: string;

    // Preselect the service category with this ID when opening Book Now.
    serviceCategoryId?: number;

    // Preselect the service with this ID when opening Book Now.
    serviceId?: number;

    // Preselect the service, staff and group event with this ID when opening Book Now.
    groupEventId?: number;

    // Automatically select staff by ID after selecting a service. When staffId is provided, serviceId is required.
    staffId?: number;

    // Function that receives a status object as its argument when Book Now is closed.
    onClose?: (status: BookingData) => void;

    // URL to redirect to on successful booking.
    onBookedRedirectTo?: string;

    // URL to redirect to on user abort.
    onAbortRedirectTo?: string;

    // Reference to the ga() function to send Google Analytics events to.
    googleAnalytics?: string;

    // Reference to the gtag() function to send Google Tag Manager events to.
    googleTag?: string;

    // Display merchant, location, category, and service extended descriptions: always - always visible, never - never
    showDescriptions?: 'always' | 'never';

    client?: {
      customerId?: string;

      // Skips the client info form entirely if provided info is valid and complete.
      skipClientForm?: boolean;
    };

    //
    // There are many more options available here; they are just not all declared.
    // Consult the Booxi documentation to learn more.
    //
  }) => void;
};
