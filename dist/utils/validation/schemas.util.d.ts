import { z } from 'zod';
/**
 * Compose into a UForm schema, keyed "email" to match <UFormField name="email"> + <UInput> —
 * see SignInUpForm.vue/ChangeEmailRequest.vue for real usage:
 *   const schema = z.object({ email: emailSchema })
 *   <UFormField name="email"><UInput v-model="state.email" /></UFormField>
 */
export declare const emailSchema: z.ZodPipe<z.ZodString, z.ZodEmail>;
/**
 * Compose into a UForm schema, keyed "name" to match <UFormField name="name"> + <UInput>:
 *   const schema = z.object({ name: nameSchema })
 *   <UFormField name="name"><UInput v-model="state.name" /></UFormField>
 * Wrap in <InputSkeleton> yourself if the field's visibility depends on async-loaded config —
 * see nerdy-nutrient-client's profile.vue for that pattern.
 */
export declare const nameSchema: z.ZodString;
