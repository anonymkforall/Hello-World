import { LightningElement, wire } from 'lwc';

// imports
import boatTypes from '@salesforce/apex/BoatDataService.getBoatTypes';
export default class BoatSearchForm extends LightningElement {
    selectedBoatTypeId = '';
    
    // Private
    error = undefined;
    
    searchOptions;
    
    // Wire a custom Apex method
    @wire(boatTypes)  
    boatTypesList({ error, data }) {
      console.log('Hi');
      if (data) {
        this.searchOptions = data;//data.map(type => {
           //return type;
        //});
        console.log('data' + Object.values(data));
        //this.searchOptions.unshift({ label: 'All Types', value: '' });
        console.log('searchOPtions' + JSON.stringify(Object.values(this.searchOptions)));
      } else if (error) {
        this.searchOptions = undefined;
        this.error = error;
        console.log('error' + JSON.stringify(error));
      }
    }
  
    // Fires event that the search option has changed.
    // passes boatTypeId (value of this.selectedBoatTypeId) in the detail
    handleSearchOptionChange(event) {
      // Create the const searchEvent
      // searchEvent must be the new custom event search
      searchEvent;
      this.dispatchEvent(searchEvent);
    }
  }