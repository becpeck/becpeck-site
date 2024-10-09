import type { CSSProperties } from "react";
import fonts from '@/styles/fonts';

export default function Contact() {
    const styleH1: CSSProperties = {
        ...fonts.zapfCalligraphic.style,
        fontSize: '72px',
    }
    const styleForm: CSSProperties = {
        width: '100%',
        maxWidth: '500px',
        display: 'flex',
        flexDirection: 'column',
        rowGap: '1rem',
    }
    const styleLabel: CSSProperties = {
        ...fonts.optimaNova.style,
        fontSize: '20px',
        display: 'block',
        marginBottom: '4px',
        width: '100%',
    }
    const styleInput: CSSProperties = {
        ...fonts.optimaNova.style,
        fontSize: '20px',
        padding: '8px',
        borderRadius: '4px',
        border: '1px solid black',
        width: '100%',
    }
    const styleButton: CSSProperties = {
        ...fonts.optimaNova.style,
        fontSize: '24px',
        backgroundColor: 'black',
        color: 'white',
        width: '100px',
        alignSelf: 'center',
        border: '1px solid black',
        borderRadius: '4px',
        padding: '8px',
    }

    return (
        <>
            <h1 style={styleH1}>Contact</h1>
            <form style={styleForm}>
                <div>
                    <label htmlFor='name' style={styleLabel}>
                        Name
                    </label>
                    <input id='name' type='text' style={styleInput} />
                </div>
                <div>
                    <label htmlFor='email' style={styleLabel}>
                        Email
                    </label>
                    <input id='email' type='email' style={styleInput} />
                </div>
                <div>
                    <label htmlFor='message' style={styleLabel}>
                        Message
                    </label>
                    <textarea rows={10} id='message' style={styleInput} />
                </div>
                <button type="submit" style={styleButton}>Submit</button>
            </form>
        </>
    )
}