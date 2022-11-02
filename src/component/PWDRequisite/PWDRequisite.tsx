import { IconCheckCircleOutline, IconHighlightOff } from '../Icon'
import './PWDRequisite.css'

export interface PWDRequisiteProps {
    lowercaseFlag: string,
    uppercaseFlag: string,
    numericFlag: string,
    nonAlphanumericFlag: string,
    minCharacterFlag: string
}

const PWDRequisite: React.FC<PWDRequisiteProps> = props => {
    const lowercaseFlagCheck = props.lowercaseFlag === "validStrength" ? <IconCheckCircleOutline color="success" /> : <IconHighlightOff color="danger" />
    const uppercaseFlagCheck = props.uppercaseFlag === "validStrength" ? <IconCheckCircleOutline color="success" /> : <IconHighlightOff color="danger" />
    const numericFlagCheck = props.numericFlag === "validStrength" ? <IconCheckCircleOutline color="success" /> : <IconHighlightOff color="danger" />
    const nonAlphanumericFlagCheck = props.nonAlphanumericFlag === "validStrength" ? <IconCheckCircleOutline color="success" /> : <IconHighlightOff color="danger" />
    const minCharacterFlagCheck = props.minCharacterFlag === "validStrength" ? <IconCheckCircleOutline color="success" /> : <IconHighlightOff color="danger" />
    return (
        <div className="PasswordStrengBox">
            <div className={props.lowercaseFlag}>{lowercaseFlagCheck}<span className="messageStrength">Must contain lowercase</span></div>
            <div className={props.uppercaseFlag}>{uppercaseFlagCheck}<span className="messageStrength">Must contain uppercase</span></div>
            <div className={props.numericFlag}>{numericFlagCheck}<span className="messageStrength"> Must contain number</span></div>
            <div className={props.nonAlphanumericFlag}>{nonAlphanumericFlagCheck}<span className="messageStrength">Must contain symbol</span></div>
            <div className={props.minCharacterFlag}>{minCharacterFlagCheck}<span className="messageStrength">Minimum length 8 characters</span></div>
        </div>
    )
}

export default PWDRequisite