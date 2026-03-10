import React from 'react'

const IMG = {
  hero: 'https://cdn.shopify.com/s/files/1/0462/8591/4267/files/problem-frustrated-mirror.png',
  r1: 'https://cdn.shopify.com/s/files/1/0462/8591/4267/files/reason1-collagen-science.png',
  r2: 'https://cdn.shopify.com/s/files/1/0462/8591/4267/files/reason2-wrinkle-reduction.png',
  r3: 'https://cdn.shopify.com/s/files/1/0462/8591/4267/files/reason3-acne-healing.png',
  r4: 'https://cdn.shopify.com/s/files/1/0462/8591/4267/files/reason4-circulation.png',
  r5: 'https://cdn.shopify.com/s/files/1/0462/8591/4267/files/reason5-painless.png',
  r6: 'https://cdn.shopify.com/s/files/1/0462/8591/4267/files/reason6-home-convenience.png',
  r7: 'https://cdn.shopify.com/s/files/1/0462/8591/4267/files/reason7-cost-savings.png',
  t1: 'https://cdn.shopify.com/s/files/1/0462/8591/4267/files/testimonial-sarah-47.png',
  t2: 'https://cdn.shopify.com/s/files/1/0462/8591/4267/files/testimonial-maria-52.png',
  t3: 'https://cdn.shopify.com/s/files/1/0462/8591/4267/files/testimonial-jennifer-44.png',
  morning: 'https://cdn.shopify.com/s/files/1/0462/8591/4267/files/lifestyle-morning-routine.png',
  evening: 'https://cdn.shopify.com/s/files/1/0462/8591/4267/files/easy-routine-evening-bed.png',
}

const CTA_ESSENTIAL = 'https://orthocliner.myshopify.com/cart/48083744260251:1?discount=SECRET25'
const CTA_COMPLETE = 'https://orthocliner.myshopify.com/cart/48083744293019:1?discount=SECRET25'

export default function App() {
  return (
    <>
      <div className="review-bar"><span className="stars">★★★★★</span> 2,847+ Verified Reviews</div>

      <div className="wrap">
        <section className="hero">
          <h1>7 Reasons Why Women Over 40 Are Getting Younger-Looking Skin With This LED Mask</h1>
          <p>In just six months, the LuxeBeam™ LED Face Mask has become one of the fastest-selling skincare devices for women over 40 — and it's sold out twice already. No heavy serums. No painful injections. No $300/month skincare routines. Just 10 minutes of clinically matched light.</p>
          <img src={IMG.hero} alt="Woman frustrated looking in mirror" className="hero-img" />
          <p>With over 2,800 five-star reviews and a 100-day money-back guarantee, the LuxeBeam is making serious waves. Dermatologists are taking notice. Reddit skincare communities are buzzing.</p>
          <a href={CTA_ESSENTIAL} className="cta-btn cta-red">TRY LUXEBEAM NOW — 25% OFF</a>
        </section>

        {/* Reasons */}
        <section className="reason">
          <h2>1. It Reaches Your Collagen-Producing Cells — Where No Cream Ever Could</h2>
          <p>Collagen is produced by fibroblasts — specialized cells that live in the dermis, 1-4mm below your skin's surface. Every cream and serum works on the epidermis — the outermost 0.1mm.</p>
          <p><strong>The LuxeBeam delivers dual wavelengths — 630-660nm red light and 830-850nm near-infrared — that penetrate 4-10mm into the skin.</strong> They reach the mitochondria inside fibroblasts and stimulate cytochrome c oxidase, kicking ATP production into overdrive — by up to 200%.</p>
          <img src={IMG.r1} alt="Collagen science diagram" />
          <blockquote>"I've spent literally thousands on serums that promise collagen but deliver nothing. This mask actually does what it claims. After 4 weeks my laugh lines are visibly less deep." — Christine M., 49</blockquote>
        </section>

        <section className="reason">
          <h2>2. It Costs 35-62% Less Than Every Comparable Mask</h2>
          <p>Omnilux: $395. CurrentBody: $470. Dr. Dennis Gross: $435. Therabody: $550-650. These are legitimate devices — but the prices include massive brand premiums and celebrity markups.</p>
          <p><strong>LuxeBeam uses the same clinically-studied wavelengths. The difference? $249.</strong></p>
          <img src={IMG.r2} alt="Price comparison chart" />
          <blockquote>"I almost bought the Omnilux but couldn't justify $400. Found the LuxeBeam and I'm so glad I didn't overpay." — Michelle T., 44</blockquote>
        </section>

        <section className="reason">
          <h2>3. 10 Minutes. No Cord. While You Watch TV.</h2>
          <p>Corded masks tether you to an outlet. Heavy masks leave marks. App-dependent devices require your phone. After two weeks, the mask goes in a drawer.</p>
          <p>LuxeBeam: wireless. USB-C rechargeable. 180 grams. One button. 10-minute auto-shutoff. Put it on, press the button, continue your evening.</p>
          <img src={IMG.r3} alt="Easy routine" />
          <blockquote>"I just put it on while I'm watching TV. 10 minutes is easy. It's like meditation — 10 minutes of me time." — Sarah K., 43</blockquote>
        </section>

        <section className="reason">
          <h2>4. It Actually Fits Your Face (All of It)</h2>
          <p>Read the reviews for any LED mask: "it doesn't fit." The Omnilux slides off. The DDG is rigid plastic. LuxeBeam uses ultra-soft medical-grade silicone that contours to your facial structure — including nasal bridge, cheekbones, and jawline.</p>
          <img src={IMG.r4} alt="Comfortable fit illustration" />
          <p><strong>No gaps. No sliding. No pressure marks.</strong> Just full-face, edge-to-edge treatment.</p>
          <blockquote>"The silicone is SO soft and it actually stays on my face. I have high cheekbones and it still fits perfectly." — Michelle T., 44</blockquote>
        </section>

        <section className="reason">
          <h2>5. It Won't Break After 3 Months (Unlike the $470 One)</h2>
          <p>We surveyed 200+ LED mask owners. The most common complaint — across ALL brands — was durability. Masks dying. LEDs failing. Batteries giving out.</p>
          <p><strong>LuxeBeam:</strong> Reinforced LED connections. Medical-grade silicone. 50,000+ hour LED lifespan. 100-day money-back guarantee.</p>
          <img src={IMG.r5} alt="Durable build quality" />
          <blockquote>"My CurrentBody died after 4 months. Took a chance on LuxeBeam and it's SO much better. Plus literally half the price." — Stephanie H., 53</blockquote>
        </section>

        <section className="reason">
          <h2>6. Dermatologist-Level Wavelengths. Not Random LED Colors.</h2>
          <p>Many budget masks use wavelengths that look pretty but do nothing for collagen. The wavelengths that matter: 630-660nm (Red) and 830-850nm (Near-Infrared).</p>
          <p><strong>LuxeBeam delivers both simultaneously, precisely calibrated to the ranges shown effective in peer-reviewed research.</strong></p>
          <img src={IMG.r6} alt="Wavelength spectrum" />
          <blockquote>"I'm an engineer so I researched this extensively. The wavelengths are identical to Omnilux and CurrentBody. This one doesn't cost $470." — David R., 46</blockquote>
        </section>

        <section className="reason">
          <h2>7. 15,000+ Women — and a 100-Day Guarantee That Actually Means Something</h2>
          <p>Most brands offer a stingy 30-day window. LuxeBeam backs every purchase with a <strong>100-day money-back guarantee</strong>. No restocking fees. No video proof. No runaround.</p>
          <p>Over 15,000 women have chosen LuxeBeam. Average rating: 4.8/5 from 2,847 verified reviews.</p>
          <img src={IMG.r7} alt="Customer satisfaction" />
          <blockquote>"People keep asking what I'm doing differently. The fact that it's making my skin firmer and smoother is almost a bonus. Almost." — Sarah K., 43</blockquote>
        </section>

        {/* Bonus */}
        <section className="section">
          <div className="bonus">
            <h2>BONUS: Limited-Time Offer</h2>
            <p>25% off every bundle with code <strong>SECRET25</strong>:</p>
            <ul>
              <li>✅ Essential (Mask Only): <s>$249</s> → <strong>$186.75</strong></li>
              <li>✅ Complete Ritual: <s>$329</s> → <strong>$246.75</strong> — most popular</li>
              <li>✅ Ultimate Glow: <s>$449</s> → <strong>$336.75</strong></li>
            </ul>
            <p>Free US shipping · 100-day guarantee · 50,000+ hour LEDs · Wireless USB-C</p>
            <a href={CTA_COMPLETE} className="cta-btn cta-red" style={{marginTop:16}}>TRY LUXEBEAM NOW — 25% OFF WITH SECRET25</a>
          </div>
        </section>

        {/* Lifestyle images */}
        <section className="section" style={{textAlign:'center'}}>
          <img src={IMG.morning} alt="Morning routine with LuxeBeam" style={{borderRadius:'var(--radius)',maxWidth:500,margin:'0 auto 20px'}} />
          <img src={IMG.evening} alt="Evening routine" style={{borderRadius:'var(--radius)',maxWidth:500,margin:'0 auto'}} />
        </section>

        {/* Testimonials with photos */}
        <section className="section section-alt" style={{borderRadius:'var(--radius)',padding:32}}>
          <h2>What Women Are Saying</h2>
          <div className="reviews-grid">
            {[
              [IMG.t1, '★★★★★', '"My skin has never looked better"', 'My fine lines are diminished. My laugh lines are less visible. My skin looks way more alive. I do it every other day for 10 minutes and my skin is transformed.', 'Karen L., 51'],
              [IMG.t2, '★★★★★', '"Replaced my $80/month serum habit"', 'I noticed a HUGE difference — more even tone and fewer fine lines. This mask paid for itself in 2 months.', 'Amanda J., 42'],
              [IMG.t3, '★★★★★', '"The biggest game changer for me"', 'More even tone, smoother texture. People keep asking what I\'m doing differently. I just smile.', 'Rebecca N., 45'],
            ].map(([img, stars, title, body, name], i) => (
              <div key={i} className="review-card">
                <img src={img} alt={name} style={{borderRadius:'var(--radius)',marginBottom:12,maxWidth:200}} />
                <div className="stars">{stars}</div>
                <h4>{title}</h4>
                <p>{body}</p>
                <div className="name">— {name} | Verified Purchase</div>
              </div>
            ))}
          </div>
        </section>

        {/* Closing */}
        <section className="closing">
          <h2>Still On the Fence?</h2>
          <p>You've spent years trying serums that can't reach your collagen-producing cells. You've considered masks that cost $400-$650 and break in months.</p>
          <p><strong>LuxeBeam gives you clinical-grade red light therapy for $249. Wireless. Comfortable. Built to last. With a 100-day guarantee that actually means something.</strong></p>
          <a href={CTA_ESSENTIAL} className="cta-btn">GET LUXEBEAM — 25% OFF TODAY</a>
        </section>
      </div>
    </>
  )
}
