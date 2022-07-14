/// <reference types="@types/google.maps" />

import { CustomMap } from "./CustomMap";
import { User } from "./User";
import { Company } from "./Company";

const user = new User();
const company = new Company();
const customMap = new CustomMap("map");

customMap.addMarker(user);
customMap.addMarker(company);

/*
 * customMap.addUserMarker(user);
 * customMap.addCompanyMarker(company);
 */
