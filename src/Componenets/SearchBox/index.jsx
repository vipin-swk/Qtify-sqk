import { useState } from 'react';
import { ReactComponent as SearchIcon } from './search-icon.svg';

export default () => {
    const [suggestion, setSuggestion] = useState('none');
    return <div style={{
        position: 'relative'
    }}><form style={{
        display: "flex",
        minWidth: "570px"

    }}>
        <input placeholder='Search a album of your choice'
            onChange={() => setSuggestion('block')}
            style={{
                flex: 1,
                borderRadius: "8px 0px 0px 8px",
                padding: "8px"
            }} />
        <button style={
            {
                width: "66px",
                height: "48px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "0px 8px 8px 0px"
            }
        }>
            <SearchIcon height={20} width={20}/>
        </button>

    </form>
    <div style={{
        position: 'absolute',
        display: `${suggestion}`,
        width: '570px',
        maxHeight: '500px',
        border: '5px solid red',
        overflowY: 'auto',
        top: '60px',
        
        
    }}>
        {
            [1, 2, 3, 4, 5, 6, 7].map(n => <div style={
                {   display: 'flex',
                    height: '71px',
                    width: '100%',
                    border: '2px solid blue'
                }
            }>
                <div style={{
                    width: '66px',
                    height: '100%',
                    border: '2px solid yellow'
                }}></div>
                <div style={
                    {
                        flex: '1',
                        border: '2px solid orange',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        color: '#fff',
                        
                    }
                }>
                    <p style={
                        {
                            fontSize: '16px'
                        }}>Song Name</p>
                    <p style={
                        {
                            fontSize: '12px'
                        }
                    }>About the song</p>
                </div>
                  <div style={{
                    width: '200px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100%',
                    border: '2px solid yellow',
                    color: '#fff'

                }}> 100 follows</div>

            </div>)
        }

    </div>
    </div> 
};