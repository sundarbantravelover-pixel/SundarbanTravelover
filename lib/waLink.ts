export const createWhatsAppLink = (
  phone: string,
  message: string
): string => {
  // remove spaces, +, dashes just in case
  const cleanPhone = phone.replace(/\D/g, "");

  const encodedMessage = encodeURIComponent(message);

  return `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
};