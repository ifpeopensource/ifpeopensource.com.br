import Link from 'next/link';
import Section from '../Section';
import { Title, Description } from '../../../styles/sections';
import { MemberList, CreateCardButton } from './styles';
import UserCard from '../../UserCard';

export interface IMember {
  avatarUrl: string;
  name: string;
  ghUsername: string;
  teams: string[];
}

interface MembersProps {
  members: IMember[];
}

const Members: React.FC<MembersProps> = ({ members }) => (
  <Section accent>
    <Title>Membros</Title>
    <Description>
      Estas são algumas das pessoas que fazem o IFPE Open Source ser o que ele
      é:
    </Description>
    <MemberList>
      {members.map((member) => (
        <UserCard key={member.ghUsername} user={member} />
      ))}
    </MemberList>
    <Link href="/member" passHref>
      <CreateCardButton>Criar meu card</CreateCardButton>
    </Link>
  </Section>
);

export default Members;
