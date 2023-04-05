import { type UserRole } from "next-auth";
import { UserAvatar } from "shared/ui";
import { SelectInput } from "shared/ui/inputs";

enum Role {
  ADMIN = "Администратор",
  USER = "Пользователь",
  GUEST = "Гость",
}

type UserProps = {
  id: string;
  name: string | null;
  image: string | null;
  role: UserRole;
  setNewRole: (id: string, newRole: string) => void;
  options: Role[];
  disabled?: boolean;
};

const User = ({
  id,
  name,
  image,
  role,
  setNewRole,
  options,
  disabled,
}: UserProps) => {
  return (
    <>
      <div className="flex items-center gap-5">
        <UserAvatar src={image} alt={name} />
        <span className="flex">{name}</span>
      </div>
      <SelectInput
        id="role"
        options={options}
        value={Role[role]}
        onChange={(e) => setNewRole(id, e.target.value)}
        disabled={disabled}
      />
    </>
  );
};

export default User;
