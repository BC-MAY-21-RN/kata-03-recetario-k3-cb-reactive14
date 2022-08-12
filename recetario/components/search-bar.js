import * as React from 'react'
import { Searchbar } from 'react-native-paper'
import { StyleSheet } from 'react-native';
const SearchBarComponent  =  () => {
    const [ searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);
    

    return (
        <Searchbar
            placeholder='What do you want to eat?'
            onChangeText={onChangeSearch}
            value={searchQuery}
            style= {styles.component}
        />
    );

    
}

const styles = StyleSheet.create({
    
    component: {
      marginTop: 8,
      color: 'red',
    }
  });
export default SearchBarComponent