import React from 'react';
import { toast } from 'react-toastify'
const Newsletter = () => {
  const handleClick = () => {
    toast.success('Subscribed Successfully',{
      position:"bottom-right",
      pauseOnHover: true,
      theme:"dark"
    })
  }
  return (
    <>
    <div className="visme_d" data-title="ViZack Subscription form" data-url="8r6dmqvq-vizack-subscription-form" data-domain="forms" data-full-page="false" data-min-height="500px" data-form-id="52195"></div>
    <script src="https://static-bundles.visme.co/forms/vismeforms-embed.js"></script>  
    </>
  );
};

export default Newsletter;
