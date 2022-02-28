import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from '../item.interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  cart: Item[] = [{
    id: '3',
    name: 'Grapes',
    imageUrl: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoGCBYVExcTFRUYGBcZGxwbGhoaGiMfIR0cIRofGR8dHCEdHysjIx8oIRoaJDUlKCwuMjIyHCE3PDcxOysxMi4BCwsLDw4PHRERHTEpIykzMTkxMTkxMTkzMzQuMTExMTExMTEzOTEyMzExMTExMTExMTExMTExMTExMTExMTExMf/AABEIAL4BCgMBIgACEQEDEQH/xAAcAAADAAMBAQEAAAAAAAAAAAAEBQYCAwcBAAj/xAA+EAABAgQEBAQDBwQBBAIDAAABAhEAAwQhBRIxQQZRYXETIoGRMqGxFEJSwdHh8AcjYvFyFTOCohYkQ7LS/8QAGgEAAgMBAQAAAAAAAAAAAAAAAwQBAgUABv/EAC4RAAICAgEDAwIFBAMAAAAAAAECABEDIRIEMUEiUWETgTJxobHwFCPR4QVCwf/aAAwDAQACEQMRAD8A1zJ5MBVMbPEA11/msDVaZigTLlqV/wAQSPlHlkUs0rV6EacEo/vTFaMhgdGcvb0THRJNYRu8cp4BxFQnTpMzyrUgEBQY+Ul7Hor5R0CnkzCA4IA1J/l40W5Y1Aj2JB9P1RrPqAbbQPLQgHQgDQO3WNCZiBYeY83H5RkmWdxCuTMzHtA5W1QBhAWGNtfWMFrOwEZIRHlQWESzHjZMUIga9f57dI0m5fX8z+kbSSbCDKaly3Nydv5yjNRGzNQ7e8ipqo6XRSnKjtB0oMIyFnO/8tHyAwGn0jYxYlxgATqnxWANb7N+keShqTqY9TzPp0jxOnqfrB7kT2WLep+sa5xDl20H5xmjS3M/VoFmTWLnRrk9LwN2AAEmSfH3iqXKlomJSghRUFJclQIYiziz7iJHEKGchLlQWkalNiOpB/KNlPiBmqVMUfiJVruS8EzMQYEku8bPToFxgTt3JDHvIhCgSF5rEG7MeXpHTP6dYgudK8YoVLQgBAKi+cj4i5ub72u42iXwjgwVUxM1cxQkoJzvy/Ck89OcZcZcTiYPslKPDkSxl8tszWYf49d+2qXVD6rfTUb8n2h0yFRrzGX9RsaXOkI8GYFSgtQmhBuwLIf/ABfXq0TOFzliWZQLIUrMoD7xYAZjuA1hoCSYWYfVqlKzC4NlJOihoQYLrEKQBNkeeUssAbqlqP3FdORPY31Jhxri9BGvEs6hhyX7iVHD9dLkrBKSpayEBiPKCQ57u3zjodMkqGnR45NgdBMXUSQsqJ8RBITZIAUD66R2FAYBNv06mF+rxL9QN8b/APIs0+PLTmf5vA8/WNy1NbrGpId+doQyt/1lJ8gRuCNG2v8Az5xK4pxlKlrVLloM1SVAKILJ18zHcjTk/aDeLcYT9mBlqfxgAkjXJqrsbhJ7wbD07mrFXLcYq4i46QlC5dOSZudSCopskBnUl/ifQdidGcc499pp5qVjLNyOW+FTEOU8j09ohMVWE1AHNAfu5H0aCJ9YJaX3jR/o00D4N3+UvUKrFhLEM5sf1gqlQFpbkQQX7wmoqVUwiZMJvdKfzO/pFBh9Ll1Ddj+sOAWZ3aVHCVeqUPDUry/vFuKxPMe8cdxmqWgiSkstTKf/ABBufezd4JRiM9h5x7H9YrlQkwiMKnTsLweUhICZaXb4iHJ9TeDDKyAj7vLl2j2hnjLr3jXWVYGhhClRbGo6FN0BJzi7DUTEBaQBMll5a90m7g80nQjrGWAUSpiApcwnQM59W6RjjM4DMdiL+kZ4BXJTLAOrOe3T9IEjK7bjoRhjte8oJclCA0LqyqSD5WJdoyqKpBT8Qvv/ADeEAqES80xaj/ikanqYPk41XiVxYeV8rjKhxtCQTOmSwSTlCUq+H/IXLxuq6tBAUFOnZtzyEc3xzEg6phZLmw+gjdR41nyvZIAA5DmX5kuYzc2HmteIHqejVW19xOm4auWcxQQrKWPfpGrEMZkSRMVMmJGROZe7DkG1PTWI1PEIkSFoQq6lFRV+EZQLddbxz7iHGPF8iCcr3PM/pBcGCqUDUSbCFsn7TsWEcVyanwhLzvMC1BJAdKUKKSpd2AJAAuXfu2S+KKbxfB8eXmcvdwMoc5lDypYDciOHUGILly5kuWcniMFqDhRSHZDvZLly2tnsGgVsuntB26MMT6iBAcRP0RhGMSajOJM1EwobNlLs+mzF2Nw+kZoxeT4iZInIMwkpygucwDkWsD37RwfBqmqlpmCSSgTQkLUNSkOwBNwC5do0VEycCn7pBDFNmILgg8wYuOkA8mRxE6R/UHjKdKqPs1MP+2n+4ptVKQ7OdMoUDbftEnUcQVSJRSknItC0zE6hJUCM4IuCHN9OcbKrNMmLmrIK1nMoszk7tHyiAANYMmAGrE66iGgrgzFWU9YrOEsJFSorzHw0fHM2f8KX1P0gTDOEfGnFSiUU6WKzYPZylJ6bnaHuJYqlk09OkIlIsABY/t9Y5srMTix9/J9v9ziRN2P4wwEmUnLJRYNv+3fWIBSfEnzNk5ncczc/N4s5KEgF26xGSsqKhaQbBZI7G9/eGkwrjUAff3J+ZCmMk4YncBu5ePcPSKeaAn4VkhQN3tYH2ghFUCHBhbiqivKlPxlQy93tFmRSNyVYqbEuuF5Y+0Sym6PMSfwsk2PvbnFDxPxDLpEBSgVzZhyy5Q1VsHOiUubnvrE/wVI+zomzVkrIlgqYa3dkjq0TmMPPqBVFRJzA5dsotlA2b8uZMJMhfLxbsP1klQ1sBqP5/FU5luEZiAEkCyS9zckm3Pv0hHIrp0tM/wANZ8SckBSyb2Or82KkvsFdo8lqBbcGCQhLPDC9NjF0O8p2k3RVKASlflUmxB/KCKnGFFIlS/MxURySSwJ/9R7Qnx+ekzVte4D9QBpBnC8kFClblTH0AYfOLC7qXIAFzFOE5znWpRUdSG/SNGO4cuWyyc0skenQjtvFlh3hqBSlJzJLKUdOwEbsTpkmUsLFspN+gd4uEsXI5EGA4akFjDGVJWuakJByJSSs2ty17RL4Ri6UAJVbkdflBlbjMtTJQuYVG2VAIzdC4Zo5XBXXedxo7h2PTE55ZOvmA6J8r/MPH3iDl9P1j7DMLXOUSteQkWIY5QLgDN8zrrGkTE7zS+9k/pFiZwEuK2s8MDwT5gXI2UCziDKeq8QhSBqLg7Hd/wCbQox1YQMyW9ucHcHzgiVmIJKi77AAMPzjHNOaYz0RS1sCG1eFrWknMD0Y/pCv7MpIPkPl1Ghb84rZ1enKDzFoU1E9SnJtmsN/ce8EOLGBQkYXcCiImXXS1IYadee8JVpM2Z4ctJJP5wt4mUqUvMNCYouBp5RIz/8A5Fqv0S1h8z8+cQN6aMEhCQuzMqDhbzMtHiKHsk/kYeIwiWRlWgoDWuWJ9S0MKeqSgAE31PrGnE6nMLh2uRzgnBQIsXyO1dpDcS8NIlKKwnyk203ZnHflCc4OgpOcJba28U/F9eFSRLsxNn1DBwfpC2TNRMQBZyBb/ICBsu/TB5cZABYSGxXDTJLh8vv7GNNDK8SYhH4lAHtqfk8VWOIT4CnHT1NoiaCsMtaVj7pB9Nx7PDOIkjczM6BW1LtcgaMzbQHWUgUCPY9Y3IxBCwFpU4P8vA1biKUgkmGqURSbJcxKw/3hZSRqD+m8PMJwhGUz5pySk3Kju3Lp19oV4JgSZaP+oV58OXrLlaKmfhzDVrfDqd2GqnjjiCbPMs/BKbMhA5bFTalvQQlkzNkPDHr3P+PmW43PuMeKjUf2JIMuQnQCxW26unJPv0ywbEElLksf5pGXDuFBX9xYe7JBHL7x6v8ASKlVNLCWUAXsxDw30+EKBx7fzchiBqS2LYwAnKkgk2gDCMEmT5pUhVrFRZ+4jPiPB0S5iVyyyFFin8J6dDFDwovwioA2BRruCn/+oIQSaMkVWpvmcM+GnVXdxr2aEcvDJsuemYooKEFxrexGjW1i4r8WGViQ0TdTPzkhHmfYCJIrvO7x9IrDlUkGywHA3AhRiiEymW48xYp5/vAFfXoppUsnMqYoEhL6B2c2tpCTEcbmVHkloIG93P6CKclYal0tTYmWJTVyw6FZpaiSlQ2e+U9RAkvFpiklCXc6qO3aMqMzJQImSyqUr40uDbmGNiOcEyqAIHiIOeUo+VXI/hVyMDVmBpoRlBHJfuPaC0lCR8V+sMaGWuW+SWohWuUaH8Qh7w1hwmkKURkBbvtaLJWHICMiJW1lPfueUByZ+JIXxD4+m5AFvMkqFcuWkuoAqucxa/Ywn4px8TEmVLOZ7KUNG5Dm8VOKYWVnJkS7N394j8f4eVKGezfeSPu9e0Wx9ScgqqkZOjKepTcm0y1EslyTZhDygQZVQgLFiGB6t+v1hrw/h5DEAJG7jzK/QdIb1dKgoKVsQecMLj7GKM3iL8Vqf7MyWndJD/lH1NgVHkTmqVOwfybteE8nOZ3hKPluQd9Wud4e/wDTEdPYQvl6hVajDIhqbcUxMr1sNW6vD3g7Fk+CEkOAcpG4bfTcRVDAJRHmSnRiAPRon6rC5MvNkJSroLc3I3tCTY2UXN1MqZPTGsyoBDg+3LqI0Tq2Xly5e5iYqcVQhRStYSRuTYjmDDrhWlTVZlu8tOqgfiP4QfqYCpdmoCXYY0Fse0kONFKWyJaVLWVaISVMljewPMQzwJUwS0pKVpUAPKQUl26sX/SOmyKUISAkBCRskMP99Y+xOSCi4cAaGG+Hp34iw6r+7yrR1OdzsQUpAAJsW/8ALUgxsm4ks5VFlZedj1gTiJpMwlHmlk3BALF3v016wo/6iGOnT/W8C5EnvHy6Adv4ZsxutClKmHnb+e0L5FYEgF9OsA4iZky6Tpt+8JZlWoFsrEc4Ki8u0zuo6gX8RxjWJFScr67dW+m8TC0EQ2wyk8VbrV/OQilp8ATMKZSJYzHdnYbknb3hpV4rZmTlyBmkTRhZUEozZiQABqTHRuG8CRRoFTWnPNd5UhwpiN1agnToOpYBrT4PJpUBEoec2VMGp3IfXbaBuNZiEzJSxpMlgjl1t3gPqzNQNL5Pk/EG1cQR3kfxrWT6mZ4s0uA+VINkDoPqdTBXEeGPOky9AiUl7dBDGjw5c9ScqCUFSXVsA97nWz6Q44vw6YJ/2hKQuWUZVNqgi7noRBSgR1AGtyobRibCajKMv4Tv31gyorwdYy4Sw7xiqY7J26wbxLRgSylLkPf+HT0htDrUow3uQnE+IZmSL3f2j3DcVIDgjq8BTKBYmsoEgmxO4givwgXy36jSB2buEoVGVLUzKqcmRLLEuVK1ypGp/L1i5wvAJctPk1H3jdRP82EQv9N1BE+YlTBRQG7Zg/5R0SZiKUpyksTYGJUWLMg+0leLMCE5QZQTMYAWsQNm/nzgzB8HlSQJWYK2KtHO5hlVS7Bai5DRKVmMoE1SQR8RHqDf5xIUA3OPaox4ipEEgSx8LP8A794mBVqppysgCpavjlq+FXO23eG6aqZOORFydTsBzL7RvRwxm+KYf+QQG0/5OflAslEVGMONz6hKnhdSEJQZYZDBkm5SNW6jrFbT1KV+UBiz2jneGLVJSJa1AlBYKFnGn87RR0FWhTORmOlyAfnYxncirVNZ8VoGmfErB8hdXTnE/WVRWMqxdmNujPFFInIC1BSMqhzHzgWvRLKir7pSQTo8EUasSQwA4kSNk4gmUpSFlgli/MGNtZiksodwQdP2hfieFGdUqKSQlIADak3PteGtNw1LKHmZu20NDOeNTMbprckSWpK4LqAdiMo+sWaFhhEvX4C6wJIOdxlD6l7Aci8XNPwrPypzTUOwex1a8JZ0DtYhkTgKMrJ+MoKVBKnsWbn/ALiUqpk0KzKFySxOvUHtf5xsoEKQpZmBSjZmFj7RsxGp/t+JM8rAsN369ekSzFhZmmMa4zS9veQ3FlP406XKzMsnKGDhyQA7aMSr3jreA0qJEgSpZdKWFu136veOfYLLBnImL0Kg3QaPHQauayCkMAkD2uIlL4/lFnAZyR5jE4innfrH1bVvLDDXb6xHTVqKtbfkLwzm4kDLyp+IBh0ii5CbuFfpAtEbk1xIgKRM9Nf+QaAMIwcTA7h+Ue45UgDKDdZBPYfvDHC5jJDa8/2gaAeZfMfAnk3AkS0krYnkN4jsdwrMhU1CWKfuvcgBzHRVLCyEP5nAA5wTOw+VkTTsGzPnIDuS6gCLgHQdhFzlXGREcpHGm8zmnBuAz56xMTLKZW8xdkgcw91elusUOMcQS5KTKpgCB8czdbagNoNfy5xjiWKT/sCkBK1TKibMRKQgElMlCiCw1F/K/aJ7DeE6uYoCYnwkbqUoEtyABN+7CCnKNtlIAHYfzvMtlBOpT1GJA0iZw1USB0sHgKhlipp5ee5lTVBXVChn9iq3vD+XhMpEiVIKXlgLPmuSSrXa/URqw+kkSRMEtC/7mV/OSPK97lxYneAL/wAli5UQe9yzADXxGdGtKUgAcgANu0b6rDxMQUqUQVBlDZiCCOeltYCkT8ocJAfQgufc39Hg9VQpgwfrA+o/5U5NYrFflZgVUeZKLwOfRpJRMMyXYDKlWcvdikAsAB8TgfSNUjFJcyWpy+rvyIeKlUxavjPl5WZuWm8crxpEyVOWMhlgqOUAEDKDbKTqGaGei6xslhvH2uENGOq1LEJWkgEApflz7u8ASsUVKCsoQo6HNDHBsYRPVKp6p1JUcqZjhKkKOjHcGwY9I21fCdPInFNRNmzblWRKcluqnUTrsRDTZ141kG5AFHUwoq+UKCfUIkoQrMEO2q7FwdWDi3eNeHcRIUAVWOt737wwqMPlTaYU0kLTLEwm1y5OcuTpsA7nSBBweUJfKANWJL/WJ6e6LDsTJNTHEccBGVDkmwaEc7AJiyZlgNWNuusU+G4UmWpJI8ptzu5u/wAoolyBlLAdLe0NcOQ3Kc+Jkfwvh5T5VOLuetrCOj0+HSk0+bVxfoYja6qEuZLUAQLi+42P1h4a3PLSl7EadYTccSRNvD/cRSuhFXEdOE+YXBbQ3S+8S0nErlCjlKSQR67GLr7NkSZi2bqNW/1CHh/hNFTOmTppaU5ISO9tL39PWAMobvDtkZR6Y0wrE0zkKlLUCpCXSt75dCC+rWiZxevmommUssWsHs2x7GKdGDyZM1MyWgpyuNNUnyqfnYvfeFWLYKmYAl/PJXkdW8onyuRrlt/C8DNqfiDYtWhGHCVO6bMpVirsd4oMQQSnKlGg2g7h3B0SpSUBnYZlCzlvp0hjPkBIf5wVASIqGHKROASf/uS8yW1Nw1wktrFp9qP+PtC3EZ2hZPluOfcHazwv/wCsHmn2ijArGBjL7qL+JBU0wzBCVo3UPu8nA26vE6vxJxSpa8zlhLS7vyb/AGY6/ilOlaSkgEEEEHcGzQm4O4eTJSZig6yVBL/dQ7A9yLv1hdeXLixuLL1h4Et3kwOFKqaH8koWYEsQOyQfneG1Ph09A/vZVEADMhRLtoWIBBv/ADSLjJAlWgRfIWUWIEdWwNznmJTWDZkhi2u0CzK5I2zHaHXGGFjL4wDEEBfUGwPeEGG0BmLCEXJ9gOZhQZmOqjbdezJrUUYvLI/va3AV+UZ4biQFnPcfvHRKXhmVkyrT4j65tOekCYlwRTLuhCpShuhRAPcO3sxhhTQ3Fl6sjRkxJx8IZkBRDXYO/wDi41is8YTE5iplIusAFiobJt5gDr+TwHR8NykHzIBb+aw1plkqcJSoqUAxcJQM18o5gA33MAzgsBr+fM5sq5L8TGkQlQQpKMgI0IbUklnuzuYT4lWMsg6AkAdi0UNUspLF3a79yfo0K8RokrAIDbQDOOaD4ixrkai7EZziVdnQ/uqNUtba6flGPEUrL4RB+FAT/PeB0zMyfT9oXyDepGQeqFU08AtqnW/8tB6FW1BTzGvrCeYsAgb/AMtBFPPa4Zj7RC0NwVQifPsSzCJHiDC11C86Ji3FsqroHUB7Ew/r5xO0J1YimWFMoEkOOvJiBf8AaNDozWQEfeXAg+BYFLppyJ1ZNQpSSCmUgFTclKsG5gNfnDjGOJ5hOaWhM2WC58VDhvUZh3jzhmVIUgzZqgpZc3278zAs9KVzj4Zyo1tzjZ/plyMGYk/tIYQz/wCRA5JvhZUf46BiXDAc2ghXE8qaRLSSH6F4najxJE5YQB4a2UkC+UnWw2tBsislIOdRlJVu7Ag9iXhlV46HiRyvZh+ITkoTkCnOvbf6xspaywJ1hBX132hXhoBKAQVKOijsB03jHF8MZIUlS3BYpc5SGewdgwvF7lZhj9YZk0FJdKdSNj0h3g1UkoBK0Bhd1AfUwro5CSm42+fOJ/EJYXPKRtC2ZL9XmaPS9Syjh4l7jWKy1hEqXMSoq1CSCAGu7btaKPh8SsrJDAAC51PM9o51glKmWoTFEHZu4aHtDXLSqzs4cbXhX8J3NHGpyKQJScSVCEh2zbMNW9IXpIWUKb/uoUg23SN/YRrFUVlmHUtflqYZYTS+VIbRQX9QfkIHn/DynOAi0YfgeIBUsFwDuIJr64BLF9No5xhGMFK5knMxStbdU5tu0NKivWQUqNtucSj8RxPeQuBWPIdo3rZpmAsGSB6mEv2E/iHyh3w7OR4fmNwPlA5qk8vpBgoOzCDJwJAErcarky5api1BKUi5P816QVhtSFypa06KQkj1SDER/VigmBKJ6VkynylGyVXZXV7i+nrBn9OsUKqcSVpUDLskkEBSdmOltPaMyypLEzz/AIlnNnsIHUrNeMFqeNRmsIFkz732kQLiJvs819Mh92t82hdwBTgSlTN1KZ+g293jTxTWhaTJRd7q6AXb3jXwNUCWlclz8RUlzzAcB+zt1imPIvIMZPipZeMBGha3vGmat940KmxfL1VGvErUHxKflIHN4WVNRbyu55av0aAsZr88wkHyiw68zFBgFGyAT8RDk8nu0UTIcnpnHUX4cicpGZUtQO4JD99d9Y+qJ2UEKBB5GKdckCEvEFIJspcvMUqI8qhqD+nMRd8fHzOuTuOVSMyUKdSihJYdRuYXJSNrDUxsxuQo1RlpBKglAYdECC5WATSC60pcMRc9eXSO+mpseYTIdmLp17jTbvGuXOIsY9xfBqmSkTEBM3ICyEljfVwdebaloFwmvTOCQRlXldQZt2IHUWtFG6dlWxsQfebMWxAS5RVmyq2JD36jVtnY6wgqsQlqDnKCRsGvrp+kP8cpBlSFB7Ei3XXSJikwxKpxJ0TtzJjX6HCFxBh5k3MJMx1BiS+wipw2uShBRl8x1fWBq/hooQmalYvsNoQ4jTTEpJKjY37dYfAInXeo5xiZmGZJ2tCunkpm5VqbZ356QOrEwE+Y7WEL8MxIpWXS6SXbl2ixYeZWvaXtDSsUhIs40jbxCUolrVsgKPqzftCaTjUsjM5B7Ha+0L01Kp8wSUWQVanfcuOW/tEu4UXIAuL0Y3MytYdY3YFTTVLziWtQ1Jykv66GKfgzheWVmcrzpf8AtJUPdRDtroOkdKocHQPjALiE2yljqO40CCzOUTqNbggEPsoMQe0Fpq3BDgKT84tsaoJaXRYjVjtHN+KMLXLmp8M+RVxzB5Py6wuW5HidGP4shx+obEeYdWnMz6/7inoa9SkTVhPwoyp/5GwjnmDSZs2oRJQS6joBoAHLn01jrNHhyZcpMlJ01P4lbnt+0AzMwAx+TO6jqUcaG5FyOHAt1uy3ezht7XgmqoVgXS5G41+UdAosKSkXF41V0hIN4n6bKLJgMfUFW1OUTMblIOULUJj5VJyqDX5qAaMPtZ5fMw5/qLgSFyzUSwBMl/G26SdfQ394ihUq/D84KfUAVhvr5PM7tiQBQEKAIKgwIe4Lv6NGU6mGX84USatSyJig1rJ5dIZS6jMIyunyKykN9vymO0BraibLBysrk4/SEM7FpswM4SN8v7xQV6gxiFw/GJalKZQDqLA232gX0rY+R+04GOKeSwhXxAkiSTLKkqzJIUl7F3cEdoveH8JGUTFhyoOAdANrc4cTqZLXEOr0xoMPEgNOP4XxRVoKUTEoWk2zix7nLb5CPK/iKomgpBCBmUGSNQCzknXtpF/jfDkqYCpIyLYsoD/9vxDv6RzaXJKJq0rDFKik+hgZROV8QD+ktdiH0gmLZ/pHVcPpFZQTbpE3wHQpWozCHyt7nT6RdSxBsOEXykGBzqW0Kq6lKb6iKGZAdSgKBSdCCInPiB8yJJU1KkVc9e6sgvsBLTYfWHIpwRCZaymqVLLupKCm3xMkJLdim/JxFDTUaiPMW6CKYN3e9yzH1GLKyRHP+K5AkzBPFnLKbnsY6fW0RaxMc4/qfLVKkEKHxqSEkaEvmbuwMEDEZQAPP6SgEX41VqmSJU6WMw8yVNsba+oPuIlMLxE+OQrRRA9X/wBwXwviYlkoWT4S/is+VWygBfoRy7RnRYJMTPVMyjIjMtKjorXKB1dj6Q9jY4gVPYbH+JOhKKZXpFiqzaPEzxFiAUCiWHJ1gSZKmTFNLStaiQBlSyX011PctFtw/wAEISB4hMxYupicoVyDM7czryEOq5cVIoDcmcD4bQpIXMck3bQDpDGp4ZlqtKlqC+YNv/IEs3zirqaVMpBCEBgCWL97HWN/DS0rQlZZlXGkE4gSLJkJ/wDF5yQ+aWSQ7BR06EpYwroTOE8GXKUVS1AsA/oWte49Y6jjiEXCHzZbtyNtfSENBmllWawUrTrFCgbRl+0f4RT5QkpGRNiUG5B1y21HaH9PiYJI0IBYHWI3FKtcsJMu76wJOx+ahWXxCAwLFlM+3mDwllxNg2ux894507nL6TVyhxqtClFLOp9rvAJoAtJNQnLLI+JSilQbdAYknZmgGhxifNWEpmkA65QBb0EU0vDzlStJJOinuSfXvCJ55D7fvNAoePE0JOUmNyqYhFPImedQSqdMSXZ2Fm+F+3MxXYNNKwlTuf3gKuoy1wx9oGw+pKCwGxb6xzKFbl58+5lP6QcSym5bJqgBc3gWpOdoR0+IhZ1bvDOfWBISotEtmDCj2izYip+Yq4jkgS1gj4kqSfURxa/WOscbY6lUo5fiAI7k2EGUWEyUS0IZPlSBpyDRZG4/hhwuhyhOOKEpBmEEpDZm1DlnEB0WKy1jyrfox/SHXEODzZslaEFOZQbzEjcE7coHwjBxLAQUs3z6xnnpeR9OpkExTi1PMqJapaFFAVYqa7bgd4g8T4ZmyCFrAXKBGdQ2S4ckcm3jtBlpAgDFJQKDYHp05QyiHAve/eRZjbxwksNNu0eTZzxPYFUzFEyloWAgDJMynKpOwf8AENOrAw9oLrbkHin12JC+D2kVDJFINTcx9U0SVBikEciAYMQqNc+ZDbIipuTAMPo5crMJaQnMXIGjs1uUGiZAMxd3jYhYIhJeoF8RJqFFbxpmqaMQuAcUqwhJL32EWyZgEszqg1PPC1qsM0tRH/iS4I+hh9I0iOpJ4Cs4Ohyr7G4f3iik1LWgXR9SALMI6aDCGVIcNCHH8MTOkrkTAClYbsdQodQWMO0KcQFiU0JSSSwAJPYXhnKb9Y7wU4pTUctM3yy3WCxc6EFrbesVVVw+rws61tZ8oP8ABEjTVxM5Uw2JUT6Ev7xWS8SzpaYfL3Z42cKic0UYcky5stQWciSRlOh8pA+bRT0HECUuGv8AzWJziFEpUp/gIvZWhF/eJ/A8ZRfxCx+Xyg1BTQ8yBuXWILEy/qD8j9YncLnplzVyBMbKXSCeYCmHW+kYVOPoAZBdTWGgiemTwqZ42VlguQNCed9LxXJlA7bnAGdEpajKrMfMba6W/wBwlxnEvEnJSkg5T5m0fl6RMiROmBjMW3LMb94OosJmIBXLW6vwruD66gxZST4nGveVMqqTlIJZTeUNrEZj+IvOYEeUMWO73HppDHBETqm8w+GhyGSGJYsQTqL8ofVmCLSEIR4fhKsRlFg2pcR2ReYlsb8DYg/9M5fiJmK3Cwn0yv8AmY6phxSlATp+scx4N/8Ap1C5KyBLmkAF7JmB8o6ZgW7gCOhoRpzjKcHG5NTUD/UQWZsrEiYcveE1VhxRrrFFKDXhTxNiKJaVfiAt3NgPzijhWXke8LiyEEKvaReBoUuYsL8qQtSU5XJKQogHo/rFNXYOVMBMygtq4Vpd3dzy0hZwrVJlrC1vYHS7kiHlViQmFgkX0B/OICJxup2TlzoTm/EFLMROMtanAPkypJzDm36xZU2PSChJK2JAccrQkx1QCF2zHQN1+t2tE3/0ad+H/wBh+sSACJzhgZ+h1pgSrlgj8+UEGZAtQuOysALmNEqqgglJ1EF0kjPc6RpOHmZOCnZAHm6l7D9+kPZcoAMLCFcAfJtu37yCJo8IRomryqEGzZcC1MnMk84JmsAgDc6Z+PGrxHhFOxIoUlBSVFRyhtXsG+cU1FT5QH13P5CEsGTJ1DaFDyZYioHOQoiyYmvGqJS1BSCkElQdiG5A6RdZIErJQUClQcHWC5+jH4r3OBkYMdK0kpWDqCE8xt0MAVtcSCcwCupf3jXjlHMkz0yEIBQu8trb3ft+kO5fCUtbKmKWo/hCmSPa++sJr0xZ9y1iTuEVWWYq5UhQZbjXqOz/AFirwyo+6S7aHmILp+GpCRZBFvxK/MwNVYUZZzS7ttBn6Z19UlHH4T2MZpnsI59x/wAUIVmp5SnOkxQ0A/COZ5n07NMXSs/fUUG4D/JukQnEFI8wHcwzgbYL79pQijURTqjKoHKSN4OmYigy2K1ZgXHl06co9ThUxQ8qFK7CNdTQlH/cQpHcW99I1seYMa8yI44OwwVTzZ15ST5UP8ahqpX+I0aK2pwuUQB4aMo0Swb2ia4brsklIHwpKgW/5ZvzEPKPEfFDsQBzh/GRUG1yb4q4flpSZ0vy5brSBZuYA0aJeTPGZCClg+p1O8XHEVeAgoAKlL8oSLkk2YCJ2p4Rq1AK8MJYOAVgKfs9orkxgmxJQ63HNJLdgA5JYAXflDmXhfhh5kwAn7oD/N4W8CypkuYvxUlK0JYJVsSWJHMMNRzMVP2oBxZyIIhsWJVtGoho0eE8wKCk5lF20cuxHrDI1ee5aBpwYEC2bX6RLIx9CVKR5iUkpsORI/KJsDvJq+0O40I8K2pUH9LxhgX9QpsoZJ6PESLBRsoetwpurHrCPFKtU0grTlR929+5/loxkUSl+RnJsB1jO6jizbEew2FoSuq/6loynw5SydsxAHyeJ+nxidUqKpnxO6QLAA8v1hxgXAwISZuZTapSWTz11MUI4SkoLpR6kk/nCTnGo0DG8ZKMC0V4QtSQ5do2VWIkAjR7Htyh2MDCk5QooVsdR6g/qIhuKJM+nKhOKQE6BIcr1YpcMBbUu17PHISw1Ghmx3ZlHhdKZifFNkO0N/sCPxQHw0l6aU2hQLddT84a5OkUJAhg3LdyoTPjRWVHKA5iyInMSnTjOSFKyy8wIy7sbhZ19NIz8mZ2BTsZ50CXFDZA63PcwaFQvp1+Udo2lZ5w9ifggHxKQhZgeZGYXGE9Vo7IeQudJnIVYokfclSys/8ANRCR7BzFdLXEHQYmlWIzQ9lDIO6W/RUWEubC+DKEJFV/uSYeVRrWIwC48mLh1nBEiAYjLTmQprgkA8gdfoIYSAGEIK2vCp2QH4Q57n+D3hlIqIS6bMgyMPykkRkpoFn7x4qbGKlWh18gYSJPYvLAJDgBVx0V+hiVpsMzzXmJ+EkZevM8xD7i4rJR4YCik5lJ3UnRh1Z4xw0ghNyWAyk6lOwU+8ZYYgj2uEPqF+Y1pMOS2kYVeGoIKVJBSQxBFj3hhTTPLH00vGmAvHUFOYY3g32VZKP+2q4B2PKFE3FBLObzOzM1o6BxrJBp5j/dGYdxeIqXISpINrw70jlrW+0gwngRPieJVTB583hywfugAFRHU5gPQ84pZ88M+aJBFRkBQCRfMwPxOGI+QPvB1FWBaAq/Lza2jQVq1KkXuG4rVZUGYNUAkjmncfn6QJT4iiYAtJfkRAdZPM1XgSw6lBjySncmBBwVMS+Wcm+2Uj0d/nHMzXoSAAO8OxfFgiwOZZslHXmeQ78oywvDJRT50AKP3ha/XnAOF4SJSyFJZQuevV94cSFl1bAWHW2scPmW8aiXGqVCkkONCB6G8M+CUOpKmfK3T+OICxaYFHLpYP63hpw/OShgPb0aEeqb2mh0aWdzptDKSA7APeNNfPQbDaElLioICFP3hrTZF3+bwoW5rxWHfEyG2mtNr6xF/wBTpomykEgZkrYHoUkkf+o+cdCq1JTLIDaWiTFOiZOZaXCS/wD5N/PeAnG2NhuVUcgTUU8GqmJp0iYhSQCWKkkODcG/qPaKL7QOsNKygZA1y8uUJ/sg5mBZW4uQY1gzrxo+I6CwbQgxaqUJ4lkMhnFtT3O0MsOwibKASueJjWcoY++a/dngHH62ZKZJSgg6FyfcMPrC50aYfeYgMaSsSTLSM6rOAOr6Fv5oYYy6oHeJbCyJiM8wOqXdxvCatrZgmKUlRTbQG1umkC5Oex7SwE6ManrE1xjxZLkpVKSsGaQzC+TqW35CJ9WKTigKMw9hb3gbA0orFELloKklioi5v07QQFwCcnb4kVNvCdIFn7TN8iEeZLlioi+Y/wCI+f1pcF4slTivyqQlJYKOig2vMevTtCPFFo89OoEpBQkta6klQa+gywp4lDSBJkgIQLqfVVwBz5vELWQ0RRPb4EmdQo8RQsOlaVDmCCPlCzHeIUoBTLeZM/xDpT/yIt6axzfg3CkLUVKAITtzJu5i7k0INo7KxT0Df6SsQ09WtK86nBJvmGsVWG4tKVbOArkot7PrGqooQQxYxHcTYf4SgynSrQcv2gGNbftRk3Ok/agzuPeA6vE0hwk5j0094i+GUBSG5H63/WKGTKAtBHZySJIAmaXLqOsD+KBMI0e/6/zrBxUwZog8WxdScRUkfD5Zbdvvd3J9IMMJZdeJwM6JTzLQXLm21/L6xP4VXBaApj6xuxTEfCQVkE9BFlZlGpWAf1Cr0S6ZeZQzzGQkern5AxzCViKhZBcDURhxHiE2pmeJNUAB8KU6JDtvvzP+o1YYllXu8avT4+G72Zx7RxRYRNqU+Io+HL23UrqOQ6mNdZRVEsFKZi2GmYguO7PD/Dqnw5y0FyksABswt8rQ0rpYIjSABEHZEH4Vw9MqQlWsxaUqUo7kh/zg2ongb/zSJleITAUBKmEs5VDZSSHHqLj2huuZ97vb5xcMOwlSPeCcS1qZaBML+VQFtWO30hJP4lSoNLQpajo4Yet3jTxlilvByu/mJ5Xs0Y8PSEsktAyxLUJcAAQ6jTNbMsZidenbb5QDXVk6XNSHAHxJIGo0Y/mIrKZAhTxXKB8IsHGf6JP5RTMihSTC4spBhsjiHyjOCDz1EMaTjKWlgpaQAL3/AJ7RIUU5IHmTmHIxN4isFSmDXMKLhF2DNE9U3GiAZ0ut48C1BEpi/lBILB973JtyEUvCSHQCsOrM5J63jiGEraag/wCQ/SOt4FUnwjlsxv7bQPMOLe8thJyofEvK+pdLQnaPsGdRLnSHP2NHKFnxnKeUEyjGan//2Q==',
    description: 'Bunches of seedless grapes.'
  }];

  ngOnInit() {
    console.log(this.cart)
  }

  shopRedirect() {
    this.activatedRoute.paramMap.subscribe(paraMap => {
      this.router.navigate(["items"]);
      return;
    }
    )
  }

  checkoutRedirect() {
    this.activatedRoute.paramMap.subscribe(paraMap => {
      this.router.navigate(["checkout"]);
      return;
    }
    )
  }
}