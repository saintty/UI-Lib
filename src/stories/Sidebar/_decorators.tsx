import { Decorator } from "@storybook/react";

const sidebarContent = (
  <ul style={{ display: "flex", flexDirection: "column", gap: 16 }}>
    <li>
      <a href="#">Home</a>
    </li>
    <li>
      <a href="#">Gallary</a>
    </li>
    <li>
      <a href="#">Team</a>
    </li>
    <li>
      <a href="#">Contacts</a>
    </li>
    <li>
      <a href="#">About</a>
    </li>
  </ul>
);

export const SidebarDecorator: Decorator = (Story, options) => {
  return (
    <div style={{ height: 500, display: "flex", gap: 16, overflow: "auto" }}>
      <Story
        args={{ position: options.args.position, children: sidebarContent }}
      />
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus hic
        deleniti, sit quasi voluptate sint error veniam inventore libero dolorum
        autem, illo asperiores itaque esse eaque soluta unde cumque eos
        voluptatum ab harum numquam. Nisi assumenda mollitia voluptate
        architecto enim beatae in expedita laudantium animi non eius doloribus
        soluta optio ipsum autem, sint nesciunt exercitationem vel cum nihil
        excepturi eligendi nulla necessitatibus temporibus? Quos, a voluptatem!
        Repellendus ut id et ex, molestias blanditiis eaque sed eum architecto!
        Tempore, tenetur. Excepturi dolor possimus laudantium error perspiciatis
        culpa, necessitatibus provident nobis ea adipisci beatae, iure quaerat
        distinctio eos sequi aspernatur, iste eius explicabo. Illo hic cum nemo
        ut sunt asperiores, voluptatibus aperiam maiores laudantium sapiente
        commodi porro vitae? Quisquam, culpa quod velit commodi a dicta
        laudantium, aut ut illum temporibus assumenda odio accusantium minima
        quaerat expedita veritatis libero nesciunt! Optio explicabo amet
        asperiores excepturi harum non quisquam nihil perferendis fuga
        temporibus, placeat quod, corporis delectus sint quos aliquid id at
        corrupti. Enim, quidem? Ut, amet inventore officia maxime nemo
        explicabo, perspiciatis, ducimus tempore animi accusantium cum. Ipsam
        delectus autem, reprehenderit aliquid laborum itaque laboriosam tempore
        porro id, aut asperiores distinctio harum repellat, officiis
        perspiciatis. Iste, earum? Culpa beatae tempora sit quod quasi
        doloremque nihil odio, sunt eaque amet repellat totam. Repudiandae
        voluptate quisquam excepturi ipsa. A obcaecati vero iste quam ipsam
        officiis ullam eveniet reiciendis maxime, aspernatur vel ut officia
        ratione numquam soluta distinctio est, fuga impedit et quas nisi!
        Deserunt optio possimus, libero sapiente temporibus modi molestias
        blanditiis doloremque adipisci perferendis ipsam sequi maiores dolores
        ratione praesentium obcaecati qui? Ea, cum. Excepturi voluptatum minus
        dolores voluptatibus totam deleniti voluptas, vero pariatur
        reprehenderit? Aliquam, veniam dolores. Dignissimos, ut quaerat magnam,
        explicabo, deleniti iste facilis aliquam repellendus nostrum amet ipsa!
        Praesentium totam harum quia qui repellat, assumenda at consectetur rem
        eos? Earum ducimus nulla totam ipsum, sint eveniet voluptatem! Impedit
        cumque possimus voluptate labore doloribus perferendis! Corporis
        voluptatum, tempora labore architecto enim laudantium alias quidem eius
        pariatur temporibus dolore praesentium officiis blanditiis minima eaque
        amet delectus culpa omnis id quibusdam ut eos impedit rem! Deleniti,
        nemo quidem eius earum excepturi, at explicabo voluptates, nostrum ut
        sit tenetur? Voluptates atque placeat suscipit dignissimos ullam, hic
        saepe dolore. Atque esse iusto exercitationem reiciendis ea commodi rem
        itaque harum modi aliquam. Tempore, facere vitae! Voluptate voluptatum
        recusandae officiis totam esse molestias ut, labore fuga rerum saepe
        dolorum autem distinctio dolore alias praesentium sequi voluptatem eum
        inventore vel veritatis! Recusandae quas quo, dolores reprehenderit
        doloremque maiores nihil eos odit ut laborum earum voluptatibus,
        excepturi quam blanditiis. Architecto earum corrupti fugiat quis cum in,
        et odit iste unde nostrum vel saepe tempore consectetur voluptatibus
        quaerat dignissimos id eligendi quo nemo sint iusto eveniet. Deleniti
        inventore repellat illo hic quam amet iusto nesciunt veritatis! Sapiente
        expedita vitae odit eos dolor quae ad, amet deleniti molestias animi.
        Temporibus pariatur optio iste velit sapiente tempora accusamus ipsam
        quam, ea in, doloribus repellendus. Aspernatur dolore repellat ipsam sed
        accusamus nulla officia, aliquam ipsa molestiae quibusdam possimus
        placeat iure modi dolores id explicabo mollitia quae velit minima
        corrupti, in dolor? Illum nihil aut commodi, in perspiciatis eos aliquid
        cupiditate odit culpa harum reiciendis porro, quo ipsa. Earum fugiat
        ratione dolorum ullam aspernatur culpa unde quae molestias architecto
        adipisci ducimus praesentium, necessitatibus laborum provident ipsa
        vitae est magnam? Dolorum tenetur sed harum ullam odit, illum, eligendi
        et repellat ex inventore nemo ab quae perferendis soluta explicabo
        recusandae quisquam? Repellat maxime ratione harum aliquid possimus,
        quasi atque magni error ad provident voluptate quae in rerum minus
        mollitia eligendi assumenda blanditiis sit molestias. Velit harum, animi
        distinctio a in totam enim debitis nemo omnis eius maiores vero!
        Molestias explicabo aperiam quibusdam distinctio laborum esse inventore
        maxime. Iusto quis quibusdam unde, maxime facere ad suscipit est ipsum
        praesentium, quas tempore quae laudantium beatae, temporibus quo. Dicta
        beatae at blanditiis suscipit quos praesentium, consectetur illo,
        accusantium reiciendis minima, ducimus iusto maxime. Distinctio
        consequuntur voluptates soluta est sequi eaque natus aperiam. Voluptates
        vel debitis eius fugiat amet corporis asperiores, laborum corrupti
        numquam laudantium. Voluptatibus nesciunt fuga facere deleniti neque
        possimus sit doloremque! Quae itaque officiis maiores quisquam illo
        culpa tempore aut officia repellendus dicta quis laudantium, numquam
        commodi eos placeat aspernatur praesentium. Cumque amet et similique.
        Non eligendi iusto soluta ullam perspiciatis placeat quae dolores, harum
        temporibus laudantium nemo, illo in sit, explicabo vitae labore
        architecto autem vero ducimus. Porro quaerat dolorem qui eligendi et
        totam excepturi sequi laboriosam sunt pariatur error laudantium nesciunt
        harum perferendis atque dignissimos quas voluptates, voluptatem laborum
        possimus tempore alias? Iure corporis odio, vitae officia nostrum
        perferendis dolorum magni minima, ducimus, recusandae soluta? Harum
        perferendis possimus nisi dignissimos, dicta reprehenderit illo quidem
        eum aliquid aperiam consequuntur repellat quibusdam, debitis id ducimus
        ea unde et vitae! Tempore reiciendis quibusdam dolores ipsa aliquam
        voluptatibus voluptatum laboriosam reprehenderit. Labore provident et in
        hic rerum recusandae natus ea quos cupiditate sunt animi repellat
        molestias odio, sint neque nihil, numquam, aliquam eligendi illum
        possimus consectetur? Doloremque minus ab numquam, vel consequatur
        placeat beatae cumque quaerat dolore soluta, corporis quod repellendus
        autem fuga at necessitatibus architecto sint! At similique commodi fugit
        libero quod facere nostrum quidem harum obcaecati omnis, voluptatum in
        assumenda consequatur nisi explicabo optio animi quisquam minus quae
        amet repellendus inventore soluta. Vel nobis fugit soluta quam quidem
        delectus neque sequi debitis provident. Quaerat consequatur accusamus
        omnis iste, ut nam explicabo nisi officia nesciunt aliquam impedit alias
        esse laborum voluptatem. Fuga quidem deserunt sapiente esse velit atque
        quam dignissimos doloribus nisi sed, architecto assumenda aperiam odio
        dicta veritatis eius? Assumenda impedit inventore adipisci unde
        exercitationem nisi odit, repudiandae sequi aliquam quasi aperiam eius
        quos voluptatibus, repellendus tempore voluptatum cum neque labore
        perferendis ut. Facilis alias ipsum molestiae tempora fuga esse iste
        sunt! Dolore hic ipsum molestias quam libero! Culpa voluptatem magni
        non, eligendi alias minima maiores, natus ipsa repellendus nisi id
        similique animi illum eos dolorum magnam unde qui tenetur quia dolores
        vitae facere odio. Nemo adipisci molestias iure perferendis minus eos
        ipsa nesciunt voluptas nostrum, pariatur ipsam commodi temporibus, saepe
        reprehenderit aperiam? Maxime autem cupiditate quod repudiandae?
      </div>
    </div>
  );
};
