import { FormWrapper } from "./form-wrapper"
import { carCompanies } from "@/carData"

type UserData = {
  Carnamee: string
  description: string
  company: string
}

type UserFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void
}


export function UserForm({
  Carnamee,
  description,
company,
  updateFields,
}: UserFormProps) {
  return (
    <FormWrapper title="User Details">
      <label className="font-semibold font-sans">Name of the car</label>
      <input
        autoFocus
        required
        type="text"
        className="text-black"
        value={Carnamee}
        onChange={e => updateFields({ Carnamee: e.target.value })}
      />
      <label className="font-semibold font-sans">Description</label>
      <textarea
        required
        rows={7}
        placeholder="Enter a nice description of the car..."
        
        value={description}
        onChange={e => updateFields({ description: e.target.value })}
      />
      <label className="font-semibold font-sans">Company</label>
      <select required value={company} className="bg-gray-200 shadow-md border border-black" onChange={(e)=>updateFields({company: e.target.value})}>
        <option value="">select a company..</option>
        {carCompanies.map(companyy => (
          <option className="border-b border border-black " key={companyy} value={companyy}>
            {companyy}
          </option>
        ))}
      </select>
      
    </FormWrapper>
  )
}