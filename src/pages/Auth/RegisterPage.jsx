import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import InputField from '../../components/common/InputField';
import Button from '../../components/common/Button';
import AnimatedBackground from '../../components/ui/AnimatedBackground';

// Gunakan styled-components dari LoginPage untuk konsistensi
const AuthContainer = styled.div`...`;
const AuthFormWrapper = styled.div`...`;
const Title = styled.h1`...`;
const Subtext = styled.p`...`;

const RegisterPage = () => {
  return (
    <AuthContainer>
        <AnimatedBackground />
        <AuthFormWrapper>
            <form>
                <Title>Create Account</Title>
                <InputField id="username" label="Username" type="text" />
                <InputField id="email" label="Email" type="email" />
                <InputField id="password" label="Password" type="password" />
                <Button primary style={{width: '100%', marginTop: '1rem'}}>
                    Sign Up
                </Button>
                <Subtext>
                    Already have an account? <Link to="/login">Sign In</Link>
                </Subtext>
            </form>
        </AuthFormWrapper>
    </AuthContainer>
  );
};

// Salin dan tempel implementasi styled-components dari LoginPage.jsx di sini
// Contoh: const AuthContainer = styled.div`...`;

export default RegisterPage;```
*(Catatan: Salin deklarasi `styled-components` dari `LoginPage.jsx` ke `RegisterPage.jsx` agar gayanya sama persis).*

---

### **Langkah 10: Placeholder Halaman Utama (`pages`)**

File-file ini akan menjadi kerangka untuk fitur-fitur utama.

#### `src/pages/KaraokeRoom.jsx`

```jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const KaraokeLayout = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 2rem;
  padding: 2rem;
  height: calc(100vh - 80px); // Sesuaikan dengan tinggi header
`;

const MainPanel = styled.div`
  background-color: rgba(0,0,0,0.4);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
`;

const SidePanel = styled.div`
  background-color: rgba(0,0,0,0.4);
  border-radius: 15px;
  padding: 1.5rem;
`;

const PlayerScreen = styled.div`
  flex-grow: 1;
  background-color: #000;
  border-radius: 15px 15px 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
`;

const Controls = styled.div`
  padding: 1.5rem;
  border-top: 1px solid #26175C;
`;

const KaraokeRoom = () => {
  const { roomId } = useParams();

  return (
    <KaraokeLayout>
      <MainPanel>
        <PlayerScreen>
          {/* Komponen KaraokePlayer.jsx akan masuk sini */}
          Karaoke Player for Room: {roomId}
        </PlayerScreen>
        <Controls>
          {/* Panel efek akan masuk sini */}
          Audio & Visual Effects Panel
        </Controls>
      </MainPanel>
      <SidePanel>
        <h2>Playlist</h2>
        {/* Komponen SongList.jsx akan masuk sini */}
      </SidePanel>
    </KaraokeLayout>
  );
};

export default KaraokeRoom;
