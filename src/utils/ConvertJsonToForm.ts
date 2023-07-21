import { TextField, EmailField, NumberField, PasswordField } from '@asigloo/vue-dynamic-forms'

const ConvertToForm = (type: any, data: any) => {
    switch(type){
        case 'TextField': {
            return TextField({
                label: data.FormLabel,
                value: data.FormValue
            })
        }
        case 'NumberField': {
            return NumberField({
                label: data.FormLabel,
                value: data.FormValue
            })
        }
        case 'PasswordField': {
            return PasswordField({
                label: data.FormLabel,
                value: data.FormValue
            })
        }
    }
    
}

export default ConvertToForm;

