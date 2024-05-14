import axios from 'axios';
import { showAlert } from './alert';
const stripe = Stripe(
  'pk_test_51Ow8asSEq49Iv6nu2HnctlSPSdUAt58Lq3xF4lPFhQRDK8MzcFMEtYlS0sii8sVeFtwdle36moAENUBD0R4n54Ey00lr3wcwjh',
);

export const bookTour = async (tourId) => {
  try {
    // 1) Get checkout session from API
    const session = await axios.get(
      `http://127.0.0.1:3000/api/v1/bookings/checkout-session/${tourId}`,
    );
    // console.log(session);

    // 2) Create checkout form + chanre credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
