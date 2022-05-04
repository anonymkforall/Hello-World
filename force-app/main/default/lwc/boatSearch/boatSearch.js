import {LightningElement} from 'lwc'
 import { NavigationMixin } from 'lightning/navigation';

 export default class BoatSearch extends NavigationMixin(LightningElement) {
    isLoading = false;
    
    // Handles loading event
    handleLoading() { }
    
    // Handles done loading event
    handleDoneLoading() {
      isLoading = true;
     }
    
    // Handles search boat event
    // This custom event comes from the form
    searchBoats(event) { }
    
    createNewBoat() {
      this[NavigationMixin.Navigate]({
        type:'standard__ObjectPage',
        attributes:{
          objectApiName: 'Boat__c',
          actionName:'new'
        }
      })
     }
  }