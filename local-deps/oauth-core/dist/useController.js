import { createGoogleController } from './providers/google/controller';
export function useController(props) {
    switch (props.provider) {
        case 'google':
            return createGoogleController(props);
        default:
            throw new Error(`Unsupported provider: ${props.provider}`);
    }
}
