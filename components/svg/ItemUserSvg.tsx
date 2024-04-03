interface Props {
  className?: string
}

export default function ItemUserSvg(props: Props) {
  return (
    <svg className={props.className} width="35" height="46" viewBox="0 0 35 46" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M17.4995 13.1429C19.9157 13.1429 21.8745 11.1814 21.8745 8.76191C21.8745 6.34237 19.9157 4.38095 17.4995 4.38095C15.0832 4.38095 13.1245 6.34237 13.1245 8.76191C13.1245 11.1814 15.0832 13.1429 17.4995 13.1429ZM17.4995 17.5238C22.332 17.5238 26.2495 13.601 26.2495 8.76191C26.2495 3.92284 22.332 0 17.4995 0C12.667 0 8.74947 3.92284 8.74947 8.76191C8.74947 13.601 12.667 17.5238 17.4995 17.5238Z" fill="#FEB44A" />
      <path fill-rule="evenodd" clip-rule="evenodd" d="M30.625 24.0952H4.375V41.619H30.625V24.0952ZM0 19.7143V46H35V19.7143H0Z" fill="#FEB44A" />
    </svg>
  )
}

