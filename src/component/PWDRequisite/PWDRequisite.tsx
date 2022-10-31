import { CheckCircleOutline, HighlightOff } from '@material-ui/icons'
import './PWDRequisite.css'

export interface PWDRequisiteProps {
    lowercaseFlag: string,
    uppercaseFlag: string,
    numericFlag: string,
    nonAlphanumericFlag: string,
    minCharacterFlag: string
}

const PWDRequisite: React.FC<PWDRequisiteProps> = props => {
    const lowercaseFlagCheck = props.lowercaseFlag === "validStrength" ? <CheckCircleOutline fontSize="small" /> : <HighlightOff fontSize="small" />
    const uppercaseFlagCheck = props.uppercaseFlag === "validStrength" ? <CheckCircleOutline fontSize="small" /> : <HighlightOff fontSize="small" />
    const numericFlagCheck = props.numericFlag === "validStrength" ? <CheckCircleOutline fontSize="small" /> : <HighlightOff fontSize="small" />
    const nonAlphanumericFlagCheck = props.nonAlphanumericFlag === "validStrength" ? <CheckCircleOutline fontSize="small" /> : <HighlightOff fontSize="small" />
    const minCharacterFlagCheck = props.minCharacterFlag === "validStrength" ? <CheckCircleOutline fontSize="small" /> : <HighlightOff fontSize="small" />
    return (
        <div className="PasswordStrengBox">
            <p className={props.lowercaseFlag}>{lowercaseFlagCheck}<span className="messageStrength">Must contain lowercase</span></p>
            <p className={props.uppercaseFlag}>{uppercaseFlagCheck}<span className="messageStrength">Must contain uppercase</span></p>
            <p className={props.numericFlag}>{numericFlagCheck}<span className="messageStrength"> Must contain number</span></p>
            <p className={props.nonAlphanumericFlag}>{nonAlphanumericFlagCheck}<span className="messageStrength">Must contain symbol</span></p>
            <p className={props.minCharacterFlag}>{minCharacterFlagCheck}<span className="messageStrength">Minimum length 8 characters</span></p>
        </div>
    )
}

export default PWDRequisite