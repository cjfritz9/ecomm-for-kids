import { passwordRequirements } from '@/lib/utils/auth';
import { Box, Progress, PasswordInput, Group, Text, Center } from '@mantine/core';
import { useInputState } from '@mantine/hooks';
import { IconCheck, IconX } from '@tabler/icons-react';
import React, { useRef, useState } from 'react';

interface Props {
  onUpdateFormData: React.Dispatch<React.SetStateAction<{ email: string; password: string; passwordConfirm: string; }>>;
  onUpdateFormStatus: React.Dispatch<React.SetStateAction<{ isValid: null | boolean; message: string; }>>;
  value: string;
}

function PasswordRequirement({ meets, label }: { meets: boolean; label: string }) {
  if (meets) return null;
  return (
    <Text component="div" c={meets ? 'teal' : 'red'} mt={5} size="sm">
      <Center inline>
        {meets ? <IconCheck size="0.9rem" stroke={1.5} /> : <IconX size="0.9rem" stroke={1.5} />}
        <Box ml={7}>{label}</Box>
      </Center>
    </Text>
  );
}

function getStrength(password: string) {
  let multiplier = password.length > 5 ? 0 : 1;

  passwordRequirements.forEach((requirement) => {
    if (!requirement.re.test(password)) {
      multiplier += 1;
    }
  });

  return Math.max(100 - (100 / (passwordRequirements.length + 1)) * multiplier, 0);
}

const PasswordWithMeter: React.FC<Props> = ({ value, onUpdateFormData, onUpdateFormStatus }) => {
  const [isFocused, setIsFocused] = useState(false);
  const strength = getStrength(value);
  const checks = passwordRequirements.map((requirement, index) => (
    <PasswordRequirement key={index} label={requirement.label} meets={requirement.re.test(value)} />
  ));
  const bars = Array(4)
    .fill(0)
    .map((_, index) => (
      <Progress
        styles={{ section: { transitionDuration: '0ms' } }}
        value={
          value.length > 0 && index === 0 ? 100 : strength >= ((index + 1) / 4) * 100 ? 100 : 0
        }
        color={strength > 80 ? 'teal' : strength > 50 ? 'yellow' : 'red'}
        key={index}
        size={4}
      />
    ));
  
  const handleFocus = () => {
    setIsFocused(true);
    onUpdateFormStatus({isValid: null, message: ''})
  }

  return (
    <div>
      <PasswordInput
        value={value}
        placeholder="Password"
        label="Password"
        required
        onChange={(e) => onUpdateFormData((prev) => ({ ...prev, password: e.target.value }))}
        onFocus={handleFocus}
        onBlur={() => setIsFocused(false)}
      />

      <Group gap={5} grow mt="xs">
        {bars}
      </Group>
      <div
        style={{
          maxHeight: isFocused || value.length > 0 ? '134px' : 0,
          transition: 'max-height .5s ease-out',
          overflowY: 'clip',
        }}
      >
        {strength < 100 && (
          <PasswordRequirement label="Has at least 8 characters" meets={value.length > 7} />
        )}
        {strength < 100 && checks}
      </div>
    </div>
  );
};

export default PasswordWithMeter;
