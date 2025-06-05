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

      {loading && <p className="text-sm text-muted-foreground">Loading origins...</p>}

      {!loading && (!result?.origin || result.origin.length === 0) && (
        <p className="text-sm text-muted-foreground">No origin filters available.</p>
      )}

      {Array.isArray(result?.origin) && result.origin.length > 0 && (
        <RadioGroup onValueChange={(value) => setFilterOrigin(value)}>
          {result.origin.map((origin: string) => (
            <div key={origin} className="flex items-center space-x-2">
              <RadioGroupItem value={origin} id={origin} className="cursor-pointer" />
              <Label htmlFor={origin}>{origin}</Label>
            </div>
          ))}
        </RadioGroup>
      )}
    </div>
  );
};

export default FilterOrigin;
