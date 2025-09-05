

const Footer = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-around gap-14 py-18 px-24 text-sm">
      <div className="flex flex-col gap-4">
        <p className="text-2xl text-black">Trendy Fashion</p>
        <p className="text-gray-500">Contact</p>
        <p>Address: Block 5 New Housing Estate Lagos</p>
        <p>Phone:(+234)8044522379</p>
        <p>Hours:10:00 - 18:00, Mon - Sat</p>
      </div>
      <div className="flex flex-col gap-4">
        <p>About</p>
        <p>About Us</p>
        <p>Delivery Information</p>
        <p> Privacy Policy</p>
        <p>Terms & Conditions</p>
        <p>Contact Us</p>
        <p>Support Center</p>
      </div>
      <div className="flex flex-col gap-4">
<p>My Account</p>
<p>Sign In</p>
<p>View Cart</p>
<p>My Wishlist</p>
<p>Track My Order</p>
<p>Help</p>
<p>Order</p>
      </div>
      <div className="flex flex-col gap-6">
<p>Install App</p>
<p>From App Store or Google Play</p>
<div className="flex items-center gap-6">
  <img src="/appstore.jpg" alt="" />
  <img src="/googleplay.jpg" alt="" />
</div>
<p>Secured Payment Gateways</p>
<div><img src="/visacard.png" alt="" /></div>
      </div>
    </div>
  )
}

export default Footer
