import React, { useState } from 'react';
import { Link as RouterLink, NavLink, Route, Routes, useLocation } from 'react-router-dom';
import AccessTime from '@mui/icons-material/AccessTime';
import ArrowForward from '@mui/icons-material/ArrowForward';
import ArrowOutward from '@mui/icons-material/ArrowOutward';
import CalendarMonth from '@mui/icons-material/CalendarMonth';
import CheckCircleOutline from '@mui/icons-material/CheckCircleOutline';
import CloseRounded from '@mui/icons-material/CloseRounded';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import HealthAndSafety from '@mui/icons-material/HealthAndSafety';
import LocationOn from '@mui/icons-material/LocationOn';
import MenuRounded from '@mui/icons-material/MenuRounded';
import Phone from '@mui/icons-material/Phone';
import {
  Alert,
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  IconButton,
  Link,
  MenuItem,
  Paper,
  Snackbar,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from '@mui/material';
import clinicLogo from '../img/Captura de tela 2024-03-12 105011.png';

const address = 'R. Waldemar Meira, 503, Portal dos Ipês, Cajamar - SP, 07790-765';
const phone = '(11) 4555-2525';
const whatsapp = '(11) 98047-7722';
const email = 'sacconsumidor@clinicabemmequer.com.br';
const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

const navigation = [
  { label: 'Início', to: '/' },
  { label: 'A clínica', to: '/sobre' },
  { label: 'Horários', to: '/horarios' },
  { label: 'Contato', to: '/contato' },
];

const specialties = [
  'Clínico geral', 'Cardiologia', 'Dermatologia', 'Pediatria', 'Fonoaudiologia',
  'Medicina ocupacional', 'Ortopedia', 'Otorrinolaringologia', 'Ginecologia',
  'Endocrinologia', 'Neurologia', 'Psiquiatria', 'Vascular', 'Urologia', 'Oftalmologia',
];

const schedules = [
  ['Clínico geral', '08:00 às 20:00', '08:00 às 15:00', '08:00 às 14:00'],
  ['Cardiologia', '08:00 às 20:00', '08:00 às 15:00', '08:00 às 13:00'],
  ['Dermatologia', '08:00 às 20:00', '08:00 às 15:00', '08:00 às 13:00'],
  ['Pediatria', '08:00 às 20:00', '08:00 às 15:00', '08:00 às 13:00'],
  ['Fonoaudiologia', '08:00 às 20:00', '08:00 às 15:00', 'Consulte'],
  ['Medicina ocupacional', '08:00 às 20:00', '08:00 às 15:00', 'Consulte'],
  ['Ortopedia', '08:00 às 19:30', '08:00 às 15:00', 'Consulte'],
  ['Otorrinolaringologia', '08:00 às 19:30', '08:00 às 15:00', 'Consulte'],
  ['Ginecologia', '08:00 às 19:30', '08:00 às 15:00', 'Consulte'],
  ['Endocrinologia', '08:00 às 19:30', '08:00 às 15:00', 'Consulte'],
  ['Neurologia', '08:00 às 19:30', '08:00 às 15:00', 'Consulte'],
  ['Psiquiatria', '08:00 às 20:00', '08:00 às 14:00', 'Consulte'],
  ['Vascular', '08:00 às 20:00', '08:00 às 14:00', 'Consulte'],
  ['Urologia', '08:00 às 20:00', '08:00 às 14:00', 'Consulte'],
  ['Oftalmologia', '08:00 às 20:00', '08:00 às 14:00', 'Consulte'],
];

function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <Box className="topline">
        <Container maxWidth="lg" className="topline-inner">
          <span><AccessTime fontSize="small" /> Seg a sex, 08h às 20h</span>
          <a href={`tel:${phone.replace(/\D/g, '')}`}><Phone fontSize="small" /> {phone}</a>
        </Container>
      </Box>
      <Box component="header" className="site-header">
        <Container maxWidth="lg" className="header-inner">
          <RouterLink to="/" className="brand" aria-label="Clínica Bem me Quer, início">
            <img src={clinicLogo} alt="Clínica Bem me Quer" />
          </RouterLink>
          <nav className="desktop-nav" aria-label="Navegação principal">
            {navigation.map((item) => (
              <NavLink key={item.to} to={item.to} end={item.to === '/'} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                {item.label}
              </NavLink>
            ))}
            <Button component={RouterLink} to="/contato" variant="contained" endIcon={<ArrowOutward />}>Fale com a equipe</Button>
          </nav>
          <IconButton className="mobile-menu-button" aria-label="Abrir menu" onClick={() => setMenuOpen(true)}><MenuRounded /></IconButton>
        </Container>
      </Box>
      <Drawer anchor="right" open={menuOpen} onClose={closeMenu}>
        <Box className="mobile-drawer" role="presentation">
          <Box className="drawer-heading"><Typography variant="h6">Navegação</Typography><IconButton aria-label="Fechar menu" onClick={closeMenu}><CloseRounded /></IconButton></Box>
          {navigation.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.to === '/'} onClick={closeMenu} className={({ isActive }) => isActive ? 'drawer-link active' : 'drawer-link'}>{item.label}</NavLink>
          ))}
          <Button component={RouterLink} to="/contato" onClick={closeMenu} variant="contained" fullWidth>Fale com a equipe</Button>
        </Box>
      </Drawer>
      {location.pathname !== '/' && <span className="sr-only" aria-live="polite">Página carregada</span>}
    </>
  );
}

function SiteFooter() {
  return (
    <Box component="footer" className="site-footer">
      <Container maxWidth="lg">
        <div className="footer-grid">
          <div className="footer-brand"><img src={clinicLogo} alt="Clínica Bem me Quer" /><Typography variant="body2">Seu bem-estar é a nossa felicidade.</Typography></div>
          <div>
            <Typography className="footer-label">Encontre a gente</Typography>
            <Link href={mapUrl} target="_blank" rel="noreferrer" className="footer-link"><LocationOn fontSize="small" />{address}</Link>
          </div>
          <div>
            <Typography className="footer-label">Vamos conversar</Typography>
            <a className="footer-link" href={`tel:${phone.replace(/\D/g, '')}`}><Phone fontSize="small" />{phone}</a>
            <a className="footer-link" href={`https://wa.me/55${whatsapp.replace(/\D/g, '')}`} target="_blank" rel="noreferrer">WhatsApp {whatsapp}</a>
            <a className="footer-link" href={`mailto:${email}`}>{email}</a>
          </div>
        </div>
        <Divider className="footer-divider" />
        <div className="footer-bottom">
          <Typography variant="caption">Clínica Bem me Quer · CNPJ 24.721.647/0001-70</Typography>
          <Typography variant="caption">© {new Date().getFullYear()} Todos os direitos reservados</Typography>
        </div>
      </Container>
    </Box>
  );
}

function PageIntro({ eyebrow, title, description }) {
  return <section className="page-intro"><Container maxWidth="lg"><Typography className="eyebrow">{eyebrow}</Typography><Typography variant="h1" component="h1">{title}</Typography><Typography className="intro-copy">{description}</Typography></Container></section>;
}

function HomePage() {
  return (
    <Box component="main">
      <section className="hero-section">
        <Container maxWidth="lg" className="hero-layout">
          <div className="hero-copy">
            <Typography className="eyebrow"><span className="eyebrow-dot" /> Cuidado próximo, em cada fase da vida</Typography>
            <Typography variant="h1" component="h1">Saúde com carinho. <em>Do seu jeito.</em></Typography>
            <Typography className="hero-description">Há mais de uma década, cuidamos de pessoas e famílias com atenção, respeito e uma equipe pronta para ouvir você.</Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} className="hero-actions">
              <Button component={RouterLink} to="/contato" variant="contained" size="large" endIcon={<ArrowForward />}>Entre em contato</Button>
              <Button component={RouterLink} to="/horarios" variant="text" size="large" endIcon={<CalendarMonth />}>Ver horários</Button>
            </Stack>
            <div className="hero-note"><CheckCircleOutline fontSize="small" /> 15 especialidades em um só lugar</div>
          </div>
          <div className="hero-visual" role="img" aria-label="Profissional de saúde conversando com paciente">
            <div className="hero-image" />
            <Paper className="hero-stamp" elevation={0}><span className="stamp-icon"><FavoriteBorder /></span><span><strong>Bem me Quer</strong><small>Saúde que acolhe</small></span></Paper>
            <div className="hero-caption"><span>01</span><span>Um cuidado que começa com escuta.</span></div>
          </div>
        </Container>
      </section>
      <section className="welcome-strip"><Container maxWidth="lg" className="welcome-inner"><Typography variant="h2">Acolher também faz parte do tratamento.</Typography><Typography>Consultas, exames e acompanhamento com atenção de verdade, perto de você.</Typography><div className="welcome-icon"><HealthAndSafety /></div></Container></section>
      <section className="specialties-section section-space">
        <Container maxWidth="lg">
          <div className="section-heading"><div><Typography className="eyebrow">Cuidado completo</Typography><Typography variant="h2">Especialidades para cuidar de você</Typography></div><Button component={RouterLink} to="/horarios" variant="text" endIcon={<ArrowForward />}>Conheça os horários</Button></div>
          <div className="specialty-grid">{specialties.slice(0, 6).map((specialty, index) => <Paper key={specialty} className="specialty-item" elevation={0}><span className={`specialty-mark mark-${index + 1}`}><FavoriteBorder /></span><Typography>{specialty}</Typography><ArrowOutward className="specialty-arrow" fontSize="small" /></Paper>)}</div>
          <Typography className="specialty-footnote">E muitas outras especialidades para acompanhar cada etapa da sua saúde.</Typography>
        </Container>
      </section>
      <section className="visit-band"><Container maxWidth="lg" className="visit-inner"><div><Typography className="eyebrow">Estamos em Cajamar</Typography><Typography variant="h2">Seu próximo cuidado começa com uma conversa.</Typography></div><Button component={RouterLink} to="/contato" variant="contained" color="secondary" endIcon={<ArrowForward />}>Fale com a clínica</Button></Container></section>
    </Box>
  );
}

function AboutPage() {
  return (
    <Box component="main">
      <PageIntro eyebrow="Nossa história" title="Cuidar de pessoas é o que nos move." description="Uma clínica feita para que você se sinta bem recebido desde o primeiro contato." />
      <Container maxWidth="lg" className="about-content section-space">
        <div className="about-lead"><div className="about-accent"><FavoriteBorder /></div><Typography variant="h2">Saúde é feita de conhecimento, presença e confiança.</Typography></div>
        <div className="about-copy">
          <Typography>Há mais de uma década, a Clínica Bem me Quer faz parte da comunidade de Cajamar. Reunimos diferentes especialidades para facilitar o cuidado com a saúde em todas as fases da vida.</Typography>
          <Typography>Acreditamos em atenção personalizada e tratamento compassivo. Nossa equipe trabalha para oferecer uma experiência acolhedora, com respeito à história e às necessidades de cada pessoa.</Typography>
          <Typography>Seguimos comprometidos com a prevenção, a qualidade do atendimento e o bem-estar da comunidade. Estamos aqui para acompanhar você em cada passo.</Typography>
          <Button component={RouterLink} to="/contato" variant="contained" endIcon={<ArrowForward />}>Conheça a clínica</Button>
        </div>
      </Container>
      <section className="values-band"><Container maxWidth="lg" className="values-grid"><div><span>01</span><Typography variant="h3">Escuta</Typography><Typography>Atendimento que começa entendendo o que você precisa.</Typography></div><div><span>02</span><Typography variant="h3">Cuidado</Typography><Typography>Um olhar atencioso para cada pessoa e cada história.</Typography></div><div><span>03</span><Typography variant="h3">Acesso</Typography><Typography>Diferentes especialidades reunidas em um só lugar.</Typography></div></Container></section>
    </Box>
  );
}

function SchedulePage() {
  return (
    <Box component="main">
      <PageIntro eyebrow="Planeje sua visita" title="Horários de atendimento" description="Confira os horários por especialidade. Para confirmar disponibilidade em feriados, fale com nossa equipe." />
      <Container maxWidth="lg" className="schedule-content section-space">
        <div className="schedule-meta"><span><AccessTime /> Segunda a sexta, das 08h às 20h</span><span><CalendarMonth /> Sábados, das 08h às 15h</span></div>
        <TableContainer component={Paper} className="schedule-table" elevation={0}><Table aria-label="Horários de atendimento por especialidade"><TableHead><TableRow><TableCell>Especialidade</TableCell><TableCell>Segunda a sexta</TableCell><TableCell>Sábados</TableCell><TableCell>Feriados</TableCell></TableRow></TableHead><TableBody>{schedules.map((row) => <TableRow key={row[0]}>{row.map((cell, index) => <TableCell key={cell + index}>{cell}</TableCell>)}</TableRow>)}</TableBody></Table></TableContainer>
        <Paper className="schedule-callout" elevation={0}><AccessTime /><Typography>Os horários podem variar em feriados. Ligue para confirmar: <a href={`tel:${phone.replace(/\D/g, '')}`}>{phone}</a>.</Typography></Paper>
      </Container>
    </Box>
  );
}

function ContactPage() {
  const [noticeOpen, setNoticeOpen] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const subject = `Contato pelo site: ${formData.get('assunto')}`;
    const body = `Nome: ${formData.get('nome')}\nTelefone: ${formData.get('telefone')}\nE-mail: ${formData.get('email')}\n\n${formData.get('mensagem')}`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setNoticeOpen(true);
  };

  return (
    <Box component="main">
      <PageIntro eyebrow="Fale com a gente" title="Estamos aqui para ouvir você." description="Tire dúvidas, consulte disponibilidade ou encontre o melhor caminho para cuidar da sua saúde." />
      <Container maxWidth="lg" className="contact-layout section-space">
        <div className="contact-details">
          <Typography variant="h2">Vamos conversar?</Typography>
          <Typography className="contact-intro">Escolha o canal que for melhor para você. Nossa equipe está pronta para ajudar.</Typography>
          <a className="contact-row" href={`tel:${phone.replace(/\D/g, '')}`}><span><Phone /></span><div><small>Telefone</small><strong>{phone}</strong></div><ArrowOutward /></a>
          <a className="contact-row" href={`https://wa.me/55${whatsapp.replace(/\D/g, '')}`} target="_blank" rel="noreferrer"><span><Phone /></span><div><small>WhatsApp</small><strong>{whatsapp}</strong></div><ArrowOutward /></a>
          <a className="contact-row" href={`mailto:${email}`}><span><FavoriteBorder /></span><div><small>E-mail</small><strong>{email}</strong></div><ArrowOutward /></a>
          <a className="address-card" href={mapUrl} target="_blank" rel="noreferrer"><LocationOn /><span><small>Endereço</small><strong>{address}</strong></span><ArrowOutward /></a>
        </div>
        <Paper component="form" onSubmit={handleSubmit} className="contact-form" elevation={0}>
          <Typography className="eyebrow">Mande uma mensagem</Typography>
          <Typography variant="h3">Como podemos ajudar?</Typography>
          <TextField name="nome" label="Nome completo" autoComplete="name" required fullWidth />
          <div className="form-row"><TextField name="telefone" label="Telefone" autoComplete="tel" required fullWidth /><TextField name="email" label="E-mail" type="email" autoComplete="email" required fullWidth /></div>
          <TextField name="assunto" label="Assunto" select defaultValue="Consulta" fullWidth>{['Consulta', 'Exame', 'Resultado de exame', 'Outro assunto'].map((option) => <MenuItem key={option} value={option}>{option}</MenuItem>)}</TextField>
          <TextField name="mensagem" label="Sua mensagem" multiline minRows={4} required fullWidth />
          <Button type="submit" variant="contained" size="large" endIcon={<ArrowForward />}>Preparar e-mail</Button>
          <Typography variant="caption" className="form-note">O envio é feito pelo aplicativo de e-mail configurado no seu dispositivo.</Typography>
        </Paper>
      </Container>
      <Container maxWidth="lg" className="map-section"><div className="map-heading"><div><Typography className="eyebrow">Como chegar</Typography><Typography variant="h2">Perto de você, em Cajamar.</Typography></div><Button href={mapUrl} target="_blank" rel="noreferrer" variant="text" endIcon={<ArrowOutward />}>Abrir no mapa</Button></div><iframe title="Mapa da região da Clínica Bem me Quer em Cajamar" src={`https://maps.google.com/maps?q=${encodeURIComponent(address)}&output=embed`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></Container>
      <Snackbar open={noticeOpen} autoHideDuration={5000} onClose={() => setNoticeOpen(false)}><Alert severity="info" variant="filled" onClose={() => setNoticeOpen(false)}>Seu aplicativo de e-mail deve abrir com a mensagem preenchida.</Alert></Snackbar>
    </Box>
  );
}

function NotFoundPage() {
  return <Container className="not-found"><Typography variant="h1">Ops!</Typography><Typography>Não encontramos essa página.</Typography><Button component={RouterLink} to="/" variant="contained">Voltar ao início</Button></Container>;
}

export default function App() {
  return <><SiteHeader /><Routes><Route path="/" element={<HomePage />} /><Route path="/sobre" element={<AboutPage />} /><Route path="/horarios" element={<SchedulePage />} /><Route path="/contato" element={<ContactPage />} /><Route path="*" element={<NotFoundPage />} /></Routes><SiteFooter /></>;
}