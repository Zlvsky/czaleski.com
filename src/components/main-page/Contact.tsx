import CopySvg from '@/assets/icons/common/copy.svg'
import MailSvg from '@/assets/icons/common/email.svg'

function Contact() {
  return (
    <div className="mt-4 flex flex-col">
      <h3 className="text-sm">Available</h3>
      <div className="flex flex-row items-center gap-3">
        <div className=" cursor-pointer rounded-md border border-black p-2">
          <MailSvg className="h-4 w-4" />
        </div>
        <div className="cursor-pointer rounded-md border border-black p-2">
          <CopySvg className="h-4 w-4" />
        </div>
        <div className="flex flex-col text-sm">
          <span>Feel free to rech me out</span>
          <span>Send me an email</span>
        </div>
      </div>
    </div>
  )
}

export default Contact
