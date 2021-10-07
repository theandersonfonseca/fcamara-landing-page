import { Facebook as FacebookIcon } from "@styled-icons/feather";
import { Linkedin as LinkedinIcon } from "@styled-icons/feather";
import { Instagram as InstagramIcon } from "@styled-icons/feather";
import { Youtube as YoutubeIcon } from "@styled-icons/feather";
import { Glassdoor as GlassdoorIcon } from "@styled-icons/simple-icons";

import * as S from "./styles";

export type SocialMediaIconsProps = {
  align: "horizontal" | "vertical";
  color: "primary" | "white";
};

export default function SocialMediaIcons({
  align,
  color,
}: SocialMediaIconsProps) {
  return (
    <S.Wrapper align={align} color={color}>
      <li>
        <a
          href="https://pt-br.facebook.com/grupo.fcamara/"
          target="_blank"
          rel="noreferrer"
          aria-label="Ir para o Facebook da FCamara"
          title="Facebook FCamara"
        >
          <FacebookIcon size={25} />
        </a>
      </li>

      <li>
        <a
          href="https://www.linkedin.com/company/grupofcamara/"
          target="_blank"
          rel="noreferrer"
          aria-label="Ir para o Linkedin da FCamara"
          title="Linkedin FCamara"
        >
          <LinkedinIcon size={25} />
        </a>
      </li>

      <li>
        <a
          href="https://www.instagram.com/grupo.fcamara/"
          target="_blank"
          rel="noreferrer"
          aria-label="Ir para o Instagram da FCamara"
          title="Instagram FCamara"
        >
          <InstagramIcon size={25} />
        </a>
      </li>

      <li>
        <a
          href="https://www.youtube.com/channel/UCHsQ04xha1YKv48dSzQFlpw"
          target="_blank"
          rel="noreferrer"
          aria-label="Ir para o Youtube da FCamara"
          title="Youtube FCamara"
        >
          <YoutubeIcon size={25} />
        </a>
      </li>

      <li>
        <a
          href="https://www.glassdoor.com.br/Avalia%C3%A7%C3%B5es/Grupo-FCamara-Avalia%C3%A7%C3%B5es-E668818.htm"
          target="_blank"
          rel="noreferrer"
          aria-label="Ir para o Glassdoor da FCamara"
          title="Glassdoor FCamara"
        >
          <GlassdoorIcon size={25} />
        </a>
      </li>
    </S.Wrapper>
  );
}
