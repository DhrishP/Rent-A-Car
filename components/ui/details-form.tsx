import { FormWrapper } from "./form-wrapper";
import { carTypes, fuelTypes } from "@/carData";
type AddressData = {
  carType: string;
  fuelType: string;
  yearsUsed: number;
  price: number;
  mileage: number;
};

type AddressFormProps = AddressData & {
  updateFields: (fields: Partial<AddressData>) => void;
};

export function AddressForm({
  carType,
  fuelType,
  yearsUsed,
  price,
  mileage,
  updateFields,
}: AddressFormProps) {
  return (
    <FormWrapper title="Address">
      <label className="font-semibold ">Car type</label>
      <select
        required
        value={carType}
        className="capitalize"
        onChange={(e) => updateFields({ carType: e.target.value })}
      >
        <option value="">Select a car type...</option>
        {carTypes.map((type) => (
          <option className="capitalize" key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
      <label className="font-semibold ">Fuel Type</label>
      <select
        required
        value={fuelType}
        className="capitalize"
        onChange={(e) => updateFields({ fuelType: e.target.value })}
      >
        <option value="">Select a fuel type...</option>
        {fuelTypes.map((type) => (
          <option className="capitalize" key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
      <label className="font-semibold ">Years Used</label>
      <input
        required
        type="number"
        max={5}
        value={yearsUsed}
        onChange={(e) => updateFields({ yearsUsed: Number(e.target.value) })}
      />
      <label className="font-semibold ">Mileage</label>
      <input
        required
        type="number"
        value={mileage}
        onChange={(e) => updateFields({ mileage: Number(e.target.value) })}
      />
      <label className="font-semibold ">Price</label>
      <input
        required
        type="number"
        value={price}
        min={10000}
        onChange={(e) => updateFields({ price: Number(e.target.value) })}
      />
    </FormWrapper>
  );
}
