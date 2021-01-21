// const stripe = require('stripe')('sk_test_51IC8ARK4GzpxP2dR0QJqnkLb8xLA0xcQwjTp5VV7rR9hx7qDpljSxrN1LO5rYsbHOXO8r0ZpuAiuEfWlV0XZZmxx00HF2J0r9Z')

// async function postCharge(req, res) {
//   try {
//     const { amount, source, receipt_email } = req.body

//     const charge = await stripe.charges.create({
//       amount,
//       currency: 'usd',
//       source,
//       receipt_email
//     })

//     if (!charge) throw new Error('charge unsuccessful')

//     res.status(200).json({
//       message: 'charge posted successfully',
//       charge
//     })
//   } catch (error) {
//     res.status(500).json({
//       message: error.message
//     })
//   }
// }

// module.exports = postCharge