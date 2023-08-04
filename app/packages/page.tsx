/* Components */
import { Hero } from "../components/Packages/pages/Hero"
import { Form } from "../components/Packages/pages/Form"

export default function Packages () {
  return <>
    <Hero />
    <Form /> 
  </>
}

export const metadata = {
  title: 'Travel App with Redux',
}
