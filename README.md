
## Notes
- Consider Typescript
    type SetFruits = Dispatch<SetStateAction<Fruits>>;\
    Ask copilot to explain fruits code

- Consider css modules

- need to eventually replace cart tooltip with library bc of display none transition limitations.
- in a normal tooltip you have time to hover over container (i.e. transition delays) instead of hacking the clickable region to prevent unhover
import "react-tooltip/dist/react-tooltip.css";


- think about filter types (on sale, brand, category, almost gone, sold out)


- sort by recommended, alphabetical a-z, alphabetical z-a, price low high, price high low


## TODO
- create cart page
- redo header into left and right nav parts (right cart and likes). Refer to fruits
- do tooltip arrow box shadow like on product button stack overflow
- add box shadow to tooltip
