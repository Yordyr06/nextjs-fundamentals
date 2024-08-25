import PLACEHOLDER__IMAGE from "./placeholder__image";
import Image from "next/image";
import styles from './styles.module.scss'

export const Description = () =>{
  return (
    <section className={styles.Description}>
      <div className={styles.Description__imageContainer}>
        <Image 
          fill
          src="/images/description.jpeg"
          alt="Description Image" 
          placeholder="blur"
          blurDataURL={PLACEHOLDER__IMAGE}
        />
      </div>
      
      <div>
        <h2>Description</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium ullam itaque illum, aspernatur beatae rem! Ex mollitia beatae, quod cumque iure quibusdam doloremque eaque nam repellat hic voluptatum quam deleniti.</p>
      </div>
    </section>
  )
}