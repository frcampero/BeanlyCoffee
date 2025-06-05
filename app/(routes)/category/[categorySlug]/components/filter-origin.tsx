import { useGetProductField } from "@/api/getProductField";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

type FiltersOriginProps = {
  setFilterOrigin: (origin: string) => void;
};

const FilterOrigin = (props: FiltersOriginProps) => {
  const { setFilterOrigin } = props;
  const { result, loading } = useGetProductField();

  return (
    <div className="my-5">
      <p className="mb-3 font-bold">Origin</p>
      {loading && result == null && <p>Loading products...</p>}

      <RadioGroup  onValueChange={(value) => setFilterOrigin(value)}>
        {result !== null &&
          result.origin.enum.map((origin: string) => (
            <div key={origin} className="flex items-center space-x-2">
              <RadioGroupItem value={origin} id={origin} className="cursor-pointer" />
              <Label htmlFor={origin}>{origin}</Label>
            </div>
          ))}
      </RadioGroup>
    </div>
  );
};

export default FilterOrigin;
