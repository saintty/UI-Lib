import { useState } from "react";

import { Button } from "@/stories/Button/Button";
import { Modal } from "@/stories/Modal/Modal";

import "./../stories/__styles/global.scss";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button title="Открыть" onClick={() => setIsOpen(true)} />
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi, magni
      velit! Dolorem minus, in cum nisi, explicabo nam doloribus magnam
      accusantium quibusdam facere corporis. Ab obcaecati itaque non aliquam
      architecto consectetur expedita harum quaerat excepturi eaque dolorem
      perferendis, eveniet ratione debitis mollitia corporis quisquam,
      voluptatibus sapiente voluptas beatae. Impedit quibusdam consequuntur,
      necessitatibus totam inventore pariatur perspiciatis porro, voluptas
      beatae laboriosam facilis hic nostrum delectus quam est ex vero quas eum
      suscipit, dolorem quis. Culpa, facere iste. Ad, adipisci veniam velit
      doloribus quo, corrupti nulla id debitis error laborum ducimus, impedit
      vero cum dicta quod eum vel voluptatibus aperiam. Obcaecati, porro? Lorem
      ipsum dolor sit amet consectetur, adipisicing elit. Modi, magni velit!
      Dolorem minus, in cum nisi, explicabo nam doloribus magnam accusantium
      quibusdam facere corporis. Ab obcaecati itaque non aliquam architecto
      consectetur expedita harum quaerat excepturi eaque dolorem perferendis,
      eveniet ratione debitis mollitia corporis quisquam, voluptatibus sapiente
      voluptas beatae. Impedit quibusdam consequuntur, necessitatibus totam
      inventore pariatur perspiciatis porro, voluptas beatae laboriosam facilis
      hic nostrum delectus quam est ex vero quas eum suscipit, dolorem quis.
      Culpa, facere iste. Ad, adipisci veniam velit doloribus quo, corrupti
      nulla id debitis error laborum ducimus, impedit vero cum dicta quod eum
      vel voluptatibus aperiam. Obcaecati, porro? Lorem ipsum dolor sit amet
      consectetur, adipisicing elit. Modi, magni velit! Dolorem minus, in cum
      nisi, explicabo nam doloribus magnam accusantium quibusdam facere
      corporis. Ab obcaecati itaque non aliquam architecto consectetur expedita
      harum quaerat excepturi eaque dolorem perferendis, eveniet ratione debitis
      mollitia corporis quisquam, voluptatibus sapiente voluptas beatae. Impedit
      quibusdam consequuntur, necessitatibus totam inventore pariatur
      perspiciatis porro, voluptas beatae laboriosam facilis hic nostrum
      delectus quam est ex vero quas eum suscipit, dolorem quis. Culpa, facere
      iste. Ad, adipisci veniam velit doloribus quo, corrupti nulla id debitis
      error laborum ducimus, impedit vero cum dicta quod eum vel voluptatibus
      aperiam. Obcaecati, porro? Lorem ipsum dolor sit amet consectetur,
      adipisicing elit. Modi, magni velit! Dolorem minus, in cum nisi, explicabo
      nam doloribus magnam accusantium quibusdam facere corporis. Ab obcaecati
      itaque non aliquam architecto consectetur expedita harum quaerat excepturi
      eaque dolorem perferendis, eveniet ratione debitis mollitia corporis
      quisquam, voluptatibus sapiente voluptas beatae. Impedit quibusdam
      consequuntur, necessitatibus totam inventore pariatur perspiciatis porro,
      voluptas beatae laboriosam facilis hic nostrum delectus quam est ex vero
      quas eum suscipit, dolorem quis. Culpa, facere iste. Ad, adipisci veniam
      velit doloribus quo, corrupti nulla id debitis error laborum ducimus,
      impedit vero cum dicta quod eum vel voluptatibus aperiam. Obcaecati,
      porro? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi,
      magni velit! Dolorem minus, in cum nisi, explicabo nam doloribus magnam
      accusantium quibusdam facere corporis. Ab obcaecati itaque non aliquam
      architecto consectetur expedita harum quaerat excepturi eaque dolorem
      perferendis, eveniet ratione debitis mollitia corporis quisquam,
      voluptatibus sapiente voluptas beatae. Impedit quibusdam consequuntur,
      necessitatibus totam inventore pariatur perspiciatis porro, voluptas
      beatae laboriosam facilis hic nostrum delectus quam est ex vero quas eum
      suscipit, dolorem quis. Culpa, facere iste. Ad, adipisci veniam velit
      doloribus quo, corrupti nulla id debitis error laborum ducimus, impedit
      vero cum dicta quod eum vel voluptatibus aperiam. Obcaecati, porro? Lorem
      ipsum dolor sit amet consectetur, adipisicing elit. Modi, magni velit!
      Dolorem minus, in cum nisi, explicabo nam doloribus magnam accusantium
      quibusdam facere corporis. Ab obcaecati itaque non aliquam architecto
      consectetur expedita harum quaerat excepturi eaque dolorem perferendis,
      eveniet ratione debitis mollitia corporis quisquam, voluptatibus sapiente
      voluptas beatae. Impedit quibusdam consequuntur, necessitatibus totam
      inventore pariatur perspiciatis porro, voluptas beatae laboriosam facilis
      hic nostrum delectus quam est ex vero quas eum suscipit, dolorem quis.
      Culpa, facere iste. Ad, adipisci veniam velit doloribus quo, corrupti
      nulla id debitis error laborum ducimus, impedit vero cum dicta quod eum
      vel voluptatibus aperiam. Obcaecati, porro? Lorem ipsum dolor sit amet
      consectetur, adipisicing elit. Modi, magni velit! Dolorem minus, in cum
      nisi, explicabo nam doloribus magnam accusantium quibusdam facere
      corporis. Ab obcaecati itaque non aliquam architecto consectetur expedita
      harum quaerat excepturi eaque dolorem perferendis, eveniet ratione debitis
      mollitia corporis quisquam, voluptatibus sapiente voluptas beatae. Impedit
      quibusdam consequuntur, necessitatibus totam inventore pariatur
      perspiciatis porro, voluptas beatae laboriosam facilis hic nostrum
      delectus quam est ex vero quas eum suscipit, dolorem quis. Culpa, facere
      iste. Ad, adipisci veniam velit doloribus quo, corrupti nulla id debitis
      error laborum ducimus, impedit vero cum dicta quod eum vel voluptatibus
      aperiam. Obcaecati, porro? Lorem ipsum dolor sit amet consectetur,
      adipisicing elit. Modi, magni velit! Dolorem minus, in cum nisi, explicabo
      nam doloribus magnam accusantium quibusdam facere corporis. Ab obcaecati
      itaque non aliquam architecto consectetur expedita harum quaerat excepturi
      eaque dolorem perferendis, eveniet ratione debitis mollitia corporis
      quisquam, voluptatibus sapiente voluptas beatae. Impedit quibusdam
      consequuntur, necessitatibus totam inventore pariatur perspiciatis porro,
      voluptas beatae laboriosam facilis hic nostrum delectus quam est ex vero
      quas eum suscipit, dolorem quis. Culpa, facere iste. Ad, adipisci veniam
      velit doloribus quo, corrupti nulla id debitis error laborum ducimus,
      impedit vero cum dicta quod eum vel voluptatibus aperiam. Obcaecati,
      porro? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi,
      magni velit! Dolorem minus, in cum nisi, explicabo nam doloribus magnam
      accusantium quibusdam facere corporis. Ab obcaecati itaque non aliquam
      architecto consectetur expedita harum quaerat excepturi eaque dolorem
      perferendis, eveniet ratione debitis mollitia corporis quisquam,
      voluptatibus sapiente voluptas beatae. Impedit quibusdam consequuntur,
      necessitatibus totam inventore pariatur perspiciatis porro, voluptas
      beatae laboriosam facilis hic nostrum delectus quam est ex vero quas eum
      suscipit, dolorem quis. Culpa, facere iste. Ad, adipisci veniam velit
      doloribus quo, corrupti nulla id debitis error laborum ducimus, impedit
      vero cum dicta quod eum vel voluptatibus aperiam. Obcaecati, porro? Lorem
      ipsum dolor sit amet consectetur, adipisicing elit. Modi, magni velit!
      Dolorem minus, in cum nisi, explicabo nam doloribus magnam accusantium
      quibusdam facere corporis. Ab obcaecati itaque non aliquam architecto
      consectetur expedita harum quaerat excepturi eaque dolorem perferendis,
      eveniet ratione debitis mollitia corporis quisquam, voluptatibus sapiente
      voluptas beatae. Impedit quibusdam consequuntur, necessitatibus totam
      inventore pariatur perspiciatis porro, voluptas beatae laboriosam facilis
      hic nostrum delectus quam est ex vero quas eum suscipit, dolorem quis.
      Culpa, facere iste. Ad, adipisci veniam velit doloribus quo, corrupti
      nulla id debitis error laborum ducimus, impedit vero cum dicta quod eum
      vel voluptatibus aperiam. Obcaecati, porro? Lorem ipsum dolor sit amet
      consectetur, adipisicing elit. Modi, magni velit! Dolorem minus, in cum
      nisi, explicabo nam doloribus magnam accusantium quibusdam facere
      corporis. Ab obcaecati itaque non aliquam architecto consectetur expedita
      harum quaerat excepturi eaque dolorem perferendis, eveniet ratione debitis
      mollitia corporis quisquam, voluptatibus sapiente voluptas beatae. Impedit
      quibusdam consequuntur, necessitatibus totam inventore pariatur
      perspiciatis porro, voluptas beatae laboriosam facilis hic nostrum
      delectus quam est ex vero quas eum suscipit, dolorem quis. Culpa, facere
      iste. Ad, adipisci veniam velit doloribus quo, corrupti nulla id debitis
      error laborum ducimus, impedit vero cum dicta quod eum vel voluptatibus
      aperiam. Obcaecati, porro? Lorem ipsum dolor sit amet consectetur,
      adipisicing elit. Modi, magni velit! Dolorem minus, in cum nisi, explicabo
      nam doloribus magnam accusantium quibusdam facere corporis. Ab obcaecati
      itaque non aliquam architecto consectetur expedita harum quaerat excepturi
      eaque dolorem perferendis, eveniet ratione debitis mollitia corporis
      quisquam, voluptatibus sapiente voluptas beatae. Impedit quibusdam
      consequuntur, necessitatibus totam inventore pariatur perspiciatis porro,
      voluptas beatae laboriosam facilis hic nostrum delectus quam est ex vero
      quas eum suscipit, dolorem quis. Culpa, facere iste. Ad, adipisci veniam
      velit doloribus quo, corrupti nulla id debitis error laborum ducimus,
      impedit vero cum dicta quod eum vel voluptatibus aperiam. Obcaecati,
      porro? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi,
      magni velit! Dolorem minus, in cum nisi, explicabo nam doloribus magnam
      accusantium quibusdam facere corporis. Ab obcaecati itaque non aliquam
      architecto consectetur expedita harum quaerat excepturi eaque dolorem
      perferendis, eveniet ratione debitis mollitia corporis quisquam,
      voluptatibus sapiente voluptas beatae. Impedit quibusdam consequuntur,
      necessitatibus totam inventore pariatur perspiciatis porro, voluptas
      beatae laboriosam facilis hic nostrum delectus quam est ex vero quas eum
      suscipit, dolorem quis. Culpa, facere iste. Ad, adipisci veniam velit
      doloribus quo, corrupti nulla id debitis error laborum ducimus, impedit
      vero cum dicta quod eum vel voluptatibus aperiam. Obcaecati, porro? Lorem
      ipsum dolor sit amet consectetur, adipisicing elit. Modi, magni velit!
      Dolorem minus, in cum nisi, explicabo nam doloribus magnam accusantium
      quibusdam facere corporis. Ab obcaecati itaque non aliquam architecto
      consectetur expedita harum quaerat excepturi eaque dolorem perferendis,
      eveniet ratione debitis mollitia corporis quisquam, voluptatibus sapiente
      voluptas beatae. Impedit quibusdam consequuntur, necessitatibus totam
      inventore pariatur perspiciatis porro, voluptas beatae laboriosam facilis
      hic nostrum delectus quam est ex vero quas eum suscipit, dolorem quis.
      Culpa, facere iste. Ad, adipisci veniam velit doloribus quo, corrupti
      nulla id debitis error laborum ducimus, impedit vero cum dicta quod eum
      vel voluptatibus aperiam. Obcaecati, porro? Lorem ipsum dolor sit amet
      consectetur, adipisicing elit. Modi, magni velit! Dolorem minus, in cum
      nisi, explicabo nam doloribus magnam accusantium quibusdam facere
      corporis. Ab obcaecati itaque non aliquam architecto consectetur expedita
      harum quaerat excepturi eaque dolorem perferendis, eveniet ratione debitis
      mollitia corporis quisquam, voluptatibus sapiente voluptas beatae. Impedit
      quibusdam consequuntur, necessitatibus totam inventore pariatur
      perspiciatis porro, voluptas beatae laboriosam facilis hic nostrum
      delectus quam est ex vero quas eum suscipit, dolorem quis. Culpa, facere
      iste. Ad, adipisci veniam velit doloribus quo, corrupti nulla id debitis
      error laborum ducimus, impedit vero cum dicta quod eum vel voluptatibus
      aperiam. Obcaecati, porro? Lorem ipsum dolor sit amet consectetur,
      adipisicing elit. Modi, magni velit! Dolorem minus, in cum nisi, explicabo
      nam doloribus magnam accusantium quibusdam facere corporis. Ab obcaecati
      itaque non aliquam architecto consectetur expedita harum quaerat excepturi
      eaque dolorem perferendis, eveniet ratione debitis mollitia corporis
      quisquam, voluptatibus sapiente voluptas beatae. Impedit quibusdam
      consequuntur, necessitatibus totam inventore pariatur perspiciatis porro,
      voluptas beatae laboriosam facilis hic nostrum delectus quam est ex vero
      quas eum suscipit, dolorem quis. Culpa, facere iste. Ad, adipisci veniam
      velit doloribus quo, corrupti nulla id debitis error laborum ducimus,
      impedit vero cum dicta quod eum vel voluptatibus aperiam. Obcaecati,
      porro? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi,
      magni velit! Dolorem minus, in cum nisi, explicabo nam doloribus magnam
      accusantium quibusdam facere corporis. Ab obcaecati itaque non aliquam
      architecto consectetur expedita harum quaerat excepturi eaque dolorem
      perferendis, eveniet ratione debitis mollitia corporis quisquam,
      voluptatibus sapiente voluptas beatae. Impedit quibusdam consequuntur,
      necessitatibus totam inventore pariatur perspiciatis porro, voluptas
      beatae laboriosam facilis hic nostrum delectus quam est ex vero quas eum
      suscipit, dolorem quis. Culpa, facere iste. Ad, adipisci veniam velit
      doloribus quo, corrupti nulla id debitis error laborum ducimus, impedit
      vero cum dicta quod eum vel voluptatibus aperiam. Obcaecati, porro? Lorem
      ipsum dolor sit amet consectetur, adipisicing elit. Modi, magni velit!
      Dolorem minus, in cum nisi, explicabo nam doloribus magnam accusantium
      quibusdam facere corporis. Ab obcaecati itaque non aliquam architecto
      consectetur expedita harum quaerat excepturi eaque dolorem perferendis,
      eveniet ratione debitis mollitia corporis quisquam, voluptatibus sapiente
      voluptas beatae. Impedit quibusdam consequuntur, necessitatibus totam
      inventore pariatur perspiciatis porro, voluptas beatae laboriosam facilis
      hic nostrum delectus quam est ex vero quas eum suscipit, dolorem quis.
      Culpa, facere iste. Ad, adipisci veniam velit doloribus quo, corrupti
      nulla id debitis error laborum ducimus, impedit vero cum dicta quod eum
      vel voluptatibus aperiam. Obcaecati, porro? Lorem ipsum dolor sit amet
      consectetur, adipisicing elit. Modi, magni velit! Dolorem minus, in cum
      nisi, explicabo nam doloribus magnam accusantium quibusdam facere
      corporis. Ab obcaecati itaque non aliquam architecto consectetur expedita
      harum quaerat excepturi eaque dolorem perferendis, eveniet ratione debitis
      mollitia corporis quisquam, voluptatibus sapiente voluptas beatae. Impedit
      quibusdam consequuntur, necessitatibus totam inventore pariatur
      perspiciatis porro, voluptas beatae laboriosam facilis hic nostrum
      delectus quam est ex vero quas eum suscipit, dolorem quis. Culpa, facere
      iste. Ad, adipisci veniam velit doloribus quo, corrupti nulla id debitis
      error laborum ducimus, impedit vero cum dicta quod eum vel voluptatibus
      aperiam. Obcaecati, porro? Lorem ipsum dolor sit amet consectetur,
      adipisicing elit. Modi, magni velit! Dolorem minus, in cum nisi, explicabo
      nam doloribus magnam accusantium quibusdam facere corporis. Ab obcaecati
      itaque non aliquam architecto consectetur expedita harum quaerat excepturi
      eaque dolorem perferendis, eveniet ratione debitis mollitia corporis
      quisquam, voluptatibus sapiente voluptas beatae. Impedit quibusdam
      consequuntur, necessitatibus totam inventore pariatur perspiciatis porro,
      voluptas beatae laboriosam facilis hic nostrum delectus quam est ex vero
      quas eum suscipit, dolorem quis. Culpa, facere iste. Ad, adipisci veniam
      velit doloribus quo, corrupti nulla id debitis error laborum ducimus,
      impedit vero cum dicta quod eum vel voluptatibus aperiam. Obcaecati,
      porro?
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Модалка">
        <h1>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, veniam!
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, cum
          iure dolore sed nulla ducimus illo. Suscipit dolore hic, esse harum
          placeat molestias id numquam accusantium itaque exercitationem dolor
          distinctio a perferendis, quasi veritatis doloremque quod? Veniam
          autem temporibus vero assumenda fugiat cum nesciunt laborum, rem
          labore natus facere. Voluptatem?
        </p>
        <Button title="Test 1" />
        <Button title="Test 2" />
        <Button title="Test 3" />
        <Button title="Test 4" />
      </Modal>
    </div>
  );
}
