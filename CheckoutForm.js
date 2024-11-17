import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements, PaymentRequestButtonElement } from '@stripe/react-stripe-js';
import { Button, Container, Form, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const stripePromise = loadStripe('pk_test_yourNewKeyHere');


const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [paymentRequest, setPaymentRequest] = useState(null);

  useEffect(() => {
    if (!stripe) return;

    const pr = stripe.paymentRequest({
      country: 'US',
      currency: 'usd',
      total: {
        label: 'Total',
        amount: 5000, // Amount in cents (e.g., $50.00)
      },
      requestPayerName: true,
      requestPayerEmail: true,
    });

    pr.canMakePayment().then((result) => {
      if (result) {
        setPaymentRequest(pr);
      }
    });
  }, [stripe]);

  const handleCardSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      setError('Stripe has not been loaded yet.');
      return;
    }

    setLoading(true);

    const cardElement = elements.getElement(CardElement);
    const { error: stripeError, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (stripeError) {
      setError(stripeError.message);
      setLoading(false);
      return;
    }

    alert('Payment successful!');
    navigate('/order-confirmation');
    setLoading(false);
  };

  return (
    <Container className="my-4">
      <h2 className="text-center mb-4">Payment Details</h2>

      {paymentRequest ? (
        <div className="mb-4">
          <PaymentRequestButtonElement options={{ paymentRequest }} />
        </div>
      ) : (
        <Alert variant="info">Google Pay/Apple Pay is not supported on this device or browser.</Alert>
      )}

      <Form onSubmit={handleCardSubmit}>
        <Form.Group controlId="cardElement" className="mb-3">
          <Form.Label>Card Details</Form.Label>
          <div style={{ border: '1px solid #ddd', borderRadius: '5px', padding: '10px' }}>
            <CardElement options={{ hidePostalCode: true }} />
          </div>
        </Form.Group>

        {error && <Alert variant="danger" className="mt-3">{error}</Alert>}

        <Button type="submit" variant="success" className="w-100" disabled={!stripe || loading}>
          {loading ? 'Processing...' : 'Confirm Payment'}
        </Button>
      </Form>
    </Container>
  );
};

const StripeWrapper = () => (
  <Elements stripe={stripePromise}>
    <CheckoutForm />
  </Elements>
);

export default StripeWrapper;
