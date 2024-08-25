import Image from "next/image";
import styles from './styles.module.scss'

export const Description = () =>{
  return (
    <section className={styles.Description}>
      <Image width={500} height={300} src="/images/description.jpeg" alt="" />
      <div>
        <h2>Description</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium ullam itaque illum, aspernatur beatae rem! Ex mollitia beatae, quod cumque iure quibusdam doloremque eaque nam repellat hic voluptatum quam deleniti.</p>
      </div>
    </section>
  )
}