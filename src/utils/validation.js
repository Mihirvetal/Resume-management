export const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);
export const validatePhone = (phone) => /^\d{10}$/.test(phone);
