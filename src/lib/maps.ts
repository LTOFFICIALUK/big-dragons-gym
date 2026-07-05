import { BUSINESS } from "@/lib/constants";

export const getFullAddress = () =>
  `${BUSINESS.address.street}, ${BUSINESS.address.locality}, ${BUSINESS.address.postalCode}, ${BUSINESS.address.country}`;

export const getGoogleMapsDirectionsUrl = () =>
  `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(getFullAddress())}`;

export const getAppleMapsDirectionsUrl = () =>
  `https://maps.apple.com/?daddr=${encodeURIComponent(getFullAddress())}&dirflg=d`;

export const getGoogleMapsPlaceUrl = () =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(getFullAddress())}`;
