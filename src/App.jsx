import './App.css'

const CHECKOUT = 'https://orthocliner.myshopify.com/cart/48083744260251:1?discount=SECRET25'

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

function CTAButton({ text = 'TRY LUXEBEAM NOW — 25% OFF', className = '' }) {
  return (
    <a href={CHECKOUT} className={`cta-btn ${className}`} target="_blank" rel="noopener noreferrer">
      {text}
    </a>
  )
}

function App() {
  return (
    <div className="page">
      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <div className="review-badge">★★★★★ 2,847+ Verified Reviews</div>
          <h1>7 Reasons Why Women Over 40 Are Getting Younger-Looking Skin With This LED Mask</h1>
          <p className="intro-lead">
            In just six months, the LuxeBeam™ LED Face Mask has become one of the fastest-selling skincare devices for women over 40 — and it's sold out twice already.
          </p>
          <p>
            No heavy serums. No painful injections. No $300/month skincare routines that barely work. Just 10 minutes of clinically matched light, and a growing number of women are reporting skin that looks years younger.
          </p>
          <p>
            With over 2,800 five-star reviews and a 100-day money-back guarantee, the LuxeBeam is making serious waves in the at-home skincare space. Dermatologists are taking notice. Reddit skincare communities are buzzing. And women who've spent years frustrated with topicals that can't deliver are finally seeing real change.
          </p>
          <p className="hook">So what makes this particular mask different? Let's break it down.</p>
          <CTAButton />
        </div>
        <div className="hero-image">
          <img src={IMG.hero} alt="Woman looking in mirror frustrated with skincare routine" loading="eager" />
        </div>
      </section>

      {/* REASON 1 */}
      <section className="reason">
        <div className="reason-text">
          <h2>1. It Reaches Your Collagen-Producing Cells — Where No Cream Ever Could</h2>
          <p>Here's the uncomfortable truth about your $80 serum: it can't reach the cells that actually make collagen.</p>
          <p>Collagen is produced by fibroblasts — specialized cells that live in the dermis, 1-4mm below your skin's surface. Every cream, serum, and topical product you own works on the epidermis — the outermost 0.1mm.</p>
          <p><strong>The LuxeBeam delivers dual wavelengths — 630-660nm red light and 830-850nm near-infrared — that penetrate 4-10mm into the skin.</strong> They reach the mitochondria inside your fibroblasts and stimulate an enzyme called cytochrome c oxidase, kicking ATP production into overdrive — by up to 200%.</p>
          <p>Energized fibroblasts produce more collagen and elastin. Not a surface coating. Actual structural proteins that make skin firm, plump, and smooth.</p>
          <blockquote>"I've spent literally thousands on serums that promise collagen but deliver nothing. This mask actually does what it claims because it's working below the surface. After 4 weeks my laugh lines are visibly less deep." — Christine M., 49</blockquote>
        </div>
        <div className="reason-image">
          <img src={IMG.r1} alt="Collagen science diagram showing light penetration into skin layers" loading="lazy" />
        </div>
      </section>

      {/* REASON 2 */}
      <section className="reason reverse">
        <div className="reason-text">
          <h2>2. It Costs 35-62% Less Than Every Comparable Mask</h2>
          <p>The Omnilux Contour is $395. The CurrentBody Series 2 is $470. The Dr. Dennis Gross is $435. The Therabody? A staggering $550-650.</p>
          <p><strong>The LuxeBeam uses the same clinically-studied wavelengths as every one of these competitors. The same soft silicone material. The same 10-minute treatment protocol. The difference? $249.</strong></p>
          <p>That's not a compromise — it's a correction. When we surveyed women on skincare forums, the #1 barrier to trying red light therapy was price. And the #1 complaint from women who DID buy a $400+ mask? That it broke within months and customer service disappeared.</p>
          <blockquote>"I almost bought the Omnilux but couldn't justify $400. Found the LuxeBeam and I'm so glad I didn't overpay." — Michelle T., 44</blockquote>
        </div>
        <div className="reason-image">
          <img src={IMG.r2} alt="Price comparison showing LuxeBeam value vs competitors" loading="lazy" />
        </div>
      </section>

      {/* SOCIAL PROOF STATS */}
      <section className="stats-bar">
        <div className="stat"><span className="stat-num">93%</span><span className="stat-label">Agreed they saw a smoother, softer look</span></div>
        <div className="stat"><span className="stat-num">92%</span><span className="stat-label">Agreed fine lines appeared less visible</span></div>
        <div className="stat"><span className="stat-num">98%</span><span className="stat-label">Satisfaction rate among women 40+</span></div>
      </section>

      {/* REASON 3 */}
      <section className="reason">
        <div className="reason-text">
          <h2>3. 10 Minutes. No Cord. While You Watch TV.</h2>
          <p>The biggest reason women quit their LED masks isn't results — it's inconvenience.</p>
          <p>Corded masks tether you to an outlet. Heavy masks leave marks. Complicated app-dependent devices require your phone (and your patience). After two weeks, the mask goes in a drawer.</p>
          <p><strong>The LuxeBeam was designed around one question: how do we make this so easy that women actually use it every day?</strong></p>
          <p>Wireless. USB-C rechargeable. 180 grams (lighter than an iPhone). One button. 10-minute auto-shutoff. Put it on, press the button, continue your evening.</p>
          <blockquote>"I just put it on while I'm watching TV. 10 minutes is easy. I do it while my kids are doing homework. It's like meditation — 10 minutes of me time." — Sarah K., 43</blockquote>
        </div>
        <div className="reason-image">
          <img src={IMG.r3} alt="Easy 10-minute LED mask routine" loading="lazy" />
        </div>
      </section>

      {/* MID CTA */}
      <section className="mid-cta">
        <CTAButton />
      </section>

      {/* REASON 4 */}
      <section className="reason reverse">
        <div className="reason-text">
          <h2>4. It Actually Fits Your Face (All of It)</h2>
          <p>Read the reviews for any LED mask on the market and you'll find the same complaint: <strong>it doesn't fit.</strong></p>
          <p>The Omnilux slides off. Gaps at the chin mean those areas get zero treatment. The Dr. Dennis Gross is rigid plastic. The CurrentBody won't sit flush on forehead and chin simultaneously.</p>
          <p><strong>LuxeBeam uses ultra-soft medical-grade silicone</strong> that contours to your facial structure — including the nasal bridge, cheekbones, and jawline — maintaining consistent LED-to-skin contact across the entire face.</p>
          <p>No gaps. No sliding. No pressure marks. Just full-face, edge-to-edge treatment.</p>
          <blockquote>"The silicone is SO soft and it actually stays on my face. I have high cheekbones and it still fits perfectly." — Michelle T., 44</blockquote>
        </div>
        <div className="reason-image">
          <img src={IMG.r4} alt="LuxeBeam mask fit and circulation benefits" loading="lazy" />
        </div>
      </section>

      {/* REASON 5 */}
      <section className="reason">
        <div className="reason-text">
          <h2>5. It Won't Break After 3 Months (Unlike the $470 One)</h2>
          <p>We surveyed over 200 LED mask owners across Reddit and skincare forums. The most common complaint — across ALL brands, at ALL price points — was durability.</p>
          <p>"I spent $400 and it broke in 3 months." "The lights flickered and they told me that's normal for a $400 device." These aren't isolated incidents. They're patterns.</p>
          <p><strong>LuxeBeam is built differently.</strong> Reinforced LED connections. Medical-grade silicone rated for repeated daily use. 50,000+ hour LED lifespan. And a 100-day money-back guarantee.</p>
          <blockquote>"My CurrentBody died after 4 months. Their customer service ghosted me. Took a chance on LuxeBeam and I'm SO glad I did. Better fit, wireless, and my skin results have been even better." — Stephanie H., 53</blockquote>
        </div>
        <div className="reason-image">
          <img src={IMG.r5} alt="Painless comfortable LED mask experience" loading="lazy" />
        </div>
      </section>

      {/* REASON 6 */}
      <section className="reason reverse">
        <div className="reason-text">
          <h2>6. Dermatologist-Level Wavelengths. Not Random LED Colors.</h2>
          <p>Many budget masks use wavelengths that look pretty but do nothing for collagen production. Red LED at 620nm is visually similar to 660nm — but clinically, they're different worlds.</p>
          <p>The wavelengths that matter:</p>
          <ul>
            <li><strong>630-660nm (Red):</strong> Stimulates surface-level collagen, reduces inflammation, improves skin tone</li>
            <li><strong>830-850nm (Near-Infrared):</strong> Penetrates to the deep dermis, stimulates mitochondrial function, boosts ATP production</li>
          </ul>
          <p><strong>LuxeBeam delivers both wavelengths simultaneously, precisely calibrated to the ranges shown effective in peer-reviewed research.</strong></p>
          <blockquote>"I'm an engineer so I researched this extensively before buying. The wavelengths are identical to what Omnilux and CurrentBody use. The only difference? This one doesn't cost $470." — David R., 46</blockquote>
        </div>
        <div className="reason-image">
          <img src={IMG.r6} alt="Home convenience of LuxeBeam LED mask" loading="lazy" />
        </div>
      </section>

      {/* REASON 7 */}
      <section className="reason">
        <div className="reason-text">
          <h2>7. 15,000+ Women — and a 100-Day Guarantee That Actually Means Something</h2>
          <p>In a market where every brand promises results and most offer a stingy 30-day window, LuxeBeam backs every purchase with a <strong>100-day money-back guarantee.</strong></p>
          <p>That's over three months to use it consistently and evaluate your results. No restocking fees. No video proof. No customer service runaround. If it doesn't work for your skin, you get every penny back.</p>
          <p>Over 15,000 women have chosen the LuxeBeam. The average rating is 4.8 out of 5 from 2,847 verified reviews.</p>
          <blockquote>"People keep asking what I'm doing differently. The fact that it's actually making my skin firmer and smoother is almost a bonus at this point." — Sarah K., 43</blockquote>
        </div>
        <div className="reason-image">
          <img src={IMG.r7} alt="Cost savings with LuxeBeam vs expensive alternatives" loading="lazy" />
        </div>
      </section>

      {/* BONUS OFFER */}
      <section className="bonus">
        <h2>BONUS: A Limited-Time Offer That Won't Last</h2>
        <p>Right now, LuxeBeam is offering <strong>25% off every bundle</strong> with the code <strong>SECRET25</strong>.</p>
        <div className="price-grid">
          <div className="price-card">
            <h3>Essential</h3>
            <p className="price-old">$249</p>
            <p className="price-new">$186.75</p>
            <p className="price-note">Less than a single professional facial</p>
          </div>
          <div className="price-card featured">
            <div className="popular-badge">Most Popular</div>
            <h3>Complete Ritual</h3>
            <p className="price-old">$329</p>
            <p className="price-new">$246.75</p>
            <p className="price-note">Mask + Serum + Case</p>
          </div>
          <div className="price-card">
            <h3>Ultimate Glow</h3>
            <p className="price-old">$449</p>
            <p className="price-new">$336.75</p>
            <p className="price-note">Still cheaper than ONE Omnilux mask</p>
          </div>
        </div>
        <div className="trust-list">
          <span>✅ Free US Shipping</span>
          <span>✅ 100-Day Money-Back Guarantee</span>
          <span>✅ US-Based Customer Support</span>
          <span>✅ 50,000+ Hour LED Lifespan</span>
          <span>✅ Wireless, USB-C Rechargeable</span>
        </div>
        <CTAButton text="TRY LUXEBEAM NOW — 25% OFF WITH SECRET25" />
      </section>

      {/* URGENCY */}
      <section className="urgency">
        <div className="urgency-inner">
          <p className="urgency-label">THE LED MASK FOR WOMEN OVER 40</p>
          <p className="urgency-sold">SOLD OUT 2X!</p>
          <img src={IMG.morning} alt="Morning skincare routine with LuxeBeam" loading="lazy" />
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials">
        <h2>What Women Are Saying</h2>
        <div className="review-grid">
          <div className="review-card">
            <img src={IMG.t1} alt="Sarah K. testimonial" loading="lazy" />
            <div className="review-stars">★★★★★</div>
            <p className="review-title">"My skin has never looked better"</p>
            <p>"My fine lines are diminished. My laugh lines are less visible. My skin looks way more alive. I do it every other day for 10 minutes and my skin is transformed."</p>
            <p className="review-author">— Karen L., 51 | Verified Purchase</p>
          </div>
          <div className="review-card">
            <img src={IMG.t2} alt="Maria testimonial" loading="lazy" />
            <div className="review-stars">★★★★★</div>
            <p className="review-title">"Replaced my $80/month serum habit"</p>
            <p>"I noticed a HUGE difference in my skin — more even tone and fewer fine lines. This mask paid for itself in 2 months."</p>
            <p className="review-author">— Amanda J., 42 | Verified Purchase</p>
          </div>
          <div className="review-card">
            <img src={IMG.t3} alt="Jennifer testimonial" loading="lazy" />
            <div className="review-stars">★★★★★</div>
            <p className="review-title">"The biggest game changer for me"</p>
            <p>"More even tone, smoother texture. People keep asking what I'm doing differently. I just smile."</p>
            <p className="review-author">— Rebecca N., 45 | Verified Purchase</p>
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="closing">
        <h2>Still On the Fence?</h2>
        <p>You've spent years trying serums that can't reach your collagen-producing cells.</p>
        <p>You've considered masks that cost $400-$650 and break in months.</p>
        <p>You've thought about Botox but want to try everything else first.</p>
        <p><strong>LuxeBeam gives you clinical-grade red light therapy — the kind backed by 50+ years of research — for $249. Wireless. Comfortable. Built to last. With a 100-day guarantee that actually means something.</strong></p>
        <p>The only question is: are you going to keep spending $100-300 a month on topicals that can't reach your dermis? Or are you going to try 10 minutes of light?</p>
        <CTAButton text="GET LUXEBEAM — 25% OFF TODAY" />
        <img src={IMG.evening} alt="Relaxing evening routine with LuxeBeam" loading="lazy" className="closing-img" />
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2026 Little Miss Mineral. All rights reserved.</p>
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Contact Us</a>
        </div>
      </footer>
    </div>
  )
}

export default App
