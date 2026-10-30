import Link from 'next/link';
import styles from './page.module.css';

const teamMembers = [
  {
    name: 'Kuch Dyna',
    number: '01',
    image: '/team/kuch-dyna.jpg',
    contribution: 'Built the product catalog and product detail experience.',
    tasks: [
      { label: 'Catalog / home page', href: '/' },
      { label: 'Product detail', href: '/products/laptop-pro' }
    ]
  },
  {
    name: 'Hean Hoea',
    number: '02',
    image: '/team/hean-hoe.jpg',
    contribution: 'Worked on adding products to the cart and reviewing the cart list.',
    tasks: [
      { label: 'Add to cart', href: '/products/headphones' },
      { label: 'Cart list', href: '/cart' }
    ]
  },
  {
    name: 'Sok Sereyusaphea',
    number: '03',
    image: '/team/sok-sereyusaphea.jpg',
    contribution: 'Created the checkout flow and invoice experience.',
    tasks: [
      { label: 'Checkout', href: '/checkout' },
      { label: 'Invoice page & HTML download', href: '/invoice' }
    ]
  }
];

export default function AboutUsPage() {
  return (
    <section className={styles.page}>
      <div className={`container ${styles.container}`}>
        <div className={styles.heading}>
          <div>
            <p className={styles.eyebrow}>THE PEOPLE BEHIND NOVATECH</p>
            <h1>Meet the team<span>.</span></h1>
            <p className={styles.subtitle}>Three teammates, one student project. Get to know the people behind our store.</p>
          </div>
          <div className={styles.memberCount}>
            <strong>{String(teamMembers.length).padStart(2, '0')}</strong>
            <span>TEAM MEMBERS</span>
          </div>
        </div>

        <div className={styles.grid}>
          {teamMembers.map((member) => (
            <details className={styles.card} key={member.number}>
              <summary className={styles.cardSummary} aria-label={`Learn more about ${member.name}`}>
                <div className={styles.photoPanel}>
                  <img className={styles.photo} src={member.image} alt={member.name} />
                </div>
                <div className={styles.cardInfo}>
                  <div>
                    <p className={styles.role}>PROJECT CONTRIBUTOR · {member.number}</p>
                    <h2>{member.name}</h2>
                    <p className={styles.caption}>{member.tasks.map((task) => task.label).join(' · ')}</p>
                  </div>
                  <span className={styles.toggleIcon} aria-hidden="true">+</span>
                </div>
              </summary>
              <div className={styles.cardDetails}>
                <p>{member.contribution}</p>
                <ul className={styles.taskList}>
                  {member.tasks.map((task) => (
                    <li key={task.label}>
                      <Link href={task.href} className={styles.shopLink}>
                        {task.label}<span aria-hidden="true">→</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
