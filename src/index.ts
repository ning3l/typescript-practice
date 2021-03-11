// This is a practice project from the course: https://www.udemy.com/course/react-and-typescript-build-a-portfolio-project

import { User } from "./User"
import {Company} from "./Company"
import { CustomMap } from "./CustomMap"

const user = new User()
const company = new Company()
const map = new CustomMap("map")

map.addMarker(user)
map.addMarker(company)
